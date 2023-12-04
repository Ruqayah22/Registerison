import UserDB from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


 
export const login = async (req, res) => {
  const secret = process.env.JWT_SECRET_KEY;
  
  try {
    const { email, password } = req.body;
    const existingUser = await UserDB.findOne({ email });
    // console.log("body",req.body);
    if (!existingUser)
      return res.status(404).json({ massage: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect)
      return res.status(401).json({ massage: "Invalid Email / Password" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      secret,
      {
        expiresIn: "7d",
      }
    );
    return res
      .status(200)
      .json({ massage: "Login Successful", result: existingUser, token });
  } catch (error) {
    res.status(500).json({ massage: error.message });
  }
};

export const register = async (req, res) => {
  
  try {
    const { name, email, password } = req.body;

    const existingUser = await UserDB.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists." });
    console.log(`User ${name}`);
    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserDB.create({
      email,
      password: hashedPassword,
      name,
    });

    // const token = jwt.sign({ email: result.email, id: result._id }, secret, {
    //   expiresIn: "7d",
    // });

    res.status(201).json({ message: "Register Successfully", result }); //, token
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getRegister = async (req, res) => {
  try {
    const users = await UserDB.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: "Unable to get users" });
  }
};