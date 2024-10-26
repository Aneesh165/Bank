import Bank from "../Model/BankModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/userModel.js";

export const Addadmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingAdmin = await Bank.findOne({ username });
    if (existingAdmin) {
      return res.json({ error: "Admin already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    let NewAdmin = new Bank({
      username,
      password: hashedPassword,
    });
    await NewAdmin.save();
    res.json({ message: "Admin registered successfully" });
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

export const AdminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingAdmin = await Bank.findOne({username});

    if (!existingAdmin) {
      return res.json({ success: false, message: "Invalid Admin Credintial" });
    }

    const comparePassword = await bcrypt.compare(
      password,
      existingAdmin.password
    );

    if (comparePassword) {
      const payload = { admin: { id: existingAdmin._id } };
      const token = jwt.sign(payload, process.env.JWT_Secret, {
        expiresIn: 36000,
      });

      return res.status(200).json({
        success: true,
        message: "Admin Login successful",
        token,
        AdminId: existingAdmin._id,
      });
    } else {
      return res.json({ success: false, message: "Incorrect password" });
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.json({ success: false, message: "Internal server error" });
  }
};

export const GetAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        const UserCount= await User.countDocuments();
        res.status(200).json({No_of_Users:UserCount,Users:users}); 
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};