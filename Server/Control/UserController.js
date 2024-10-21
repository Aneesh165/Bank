import bcrypt from "bcrypt";
import User from "../model/userModel.js";
import { upload } from "../Multer.js";

export const AddUser = async (req, res) => {
  console.log("2");

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
  console.log("1");

  let image = req.file;
  console.log(image);
  console.log("3");

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
