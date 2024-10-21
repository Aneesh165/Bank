import User from "../Model/UserModel.js";

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
    pancard
  } = req.body;

  let image =req.file
  console.log(image);
  

  try {
    // let newUser = new User({ name:name, email:email, password:password });
    //   await newUser.save();
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
    console.log(error);
  }
};
