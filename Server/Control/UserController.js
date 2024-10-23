import bcrypt from "bcrypt";
import User from "../model/userModel.js";
import { upload } from "../Multer.js";
import jwt from "jsonwebtoken";

export const AddUser = async (req, res) => {
  const {
    name,
    username,
    address,
    email,
    age,
    phone,
    dob,
    adhar,
    initialamount,
    password,
    pancard,
  } = req.body;
  let image = req.file;
  console.log(image);
  try {
    const existingEmailUser = await User.findOne({ email });
    if (existingEmailUser) {
      return res.status(409).json({ error: "Email already exists" });
    }

    const existingUsernameUser = await User.findOne({ username });
    if (existingUsernameUser) {
      return res.status(409).json({ error: "Username already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const accno = Math.ceil(Math.random() * 100000000000000);

    let newUser = new User({
      name,
      username,
      address,
      email,
      age,
      phone,
      dob,
      adhar,
      initialamount,
      password: hashedPassword,
      pancard,
      image: image ? image.filename : null,
      accountno: accno,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);

    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      const message =
        field === "username"
          ? "Username already exists"
          : "Email already exists";
      return res.status(409).json({ error: message });
    }

    res.status(500).json({ error: "Failed to register user" });
  }
};

export const uploadImage = upload.single("image");

export const UserLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({
      username: username.toLowerCase(),
    });

    if (!existingUser) {
      return res.json({ success: false, message: "Username not found" });
    }

    const comparePassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (comparePassword) {
      const payload = { user: { id: existingUser._id } };
      const token = jwt.sign(payload, process.env.JWT_Secret, {
        expiresIn: 36000,
      });

      return res.json({
        success: true,
        message: "Login successful",
        token,
        userId: existingUser._id,
      });
    } else {
      return res.json({ success: false, message: "Incorrect password" });
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.json({ success: false, message: "Internal server error" });
  }
};

export const UserHome = async (req, res) => {
  const Userid = req.params.id;
  try {
    const exsistinguser = await User.findById(Userid);
    if (!exsistinguser) {
      return res.json({ message: "usernotfound" });
    }
    res.json({
      AccountNumber: exsistinguser.accountno,
      balance: exsistinguser.initialamount,
      image: exsistinguser.image,
    });
  } catch (error) {
    console.log("Error fetching user data:", error);
  }
};

export const UserDeposit = async (req, res) => {
  const Userid = req.params.id;
  try {
    const exsistinguser = await User.findById(Userid);
    if (!exsistinguser) {
      return res.json({ message: "usernotfound" });
    }
    res.json({
      AccountNumber: exsistinguser.accountno,
      image: exsistinguser.image,
    });
  } catch (error) {
    console.log("Error fetching user data:", error);
  }
};

export const UserWithdraw = async (req, res) => {
  const Userid = req.params.id;
  try {
    const exsistinguser = await User.findById(Userid);
    if (!exsistinguser) {
      return res.json({ message: "usernotfound" });
    }
    res.json({
      AccountNumber: exsistinguser.accountno,
      image: exsistinguser.image,
    });
  } catch (error) {
    console.log("Error fetching user data:", error);
  }
};

export const UserProfile = async (req, res) => {
  const Userid = req.params.id;
  try {
    const exsistinguser = await User.findById(Userid);
    if (!exsistinguser) {
      return res.json({ message: "usernotfound" });
    }
    res.json({ exsistinguser });
  } catch (error) {
    console.log("Error fetching user data:", error);
  }
};
