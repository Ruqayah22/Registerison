import UserDB from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


 
export const login = async (req, res) => {
  const secret = process.env.JWT_SECRET_KEY;
  const { email, password } = req.body;

  try {
    const existingUser = await UserDB.findOne({ email });
    // console.log("body",req.body);
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect)
      return res.status(401).json({ message: "Invalid Email / Password" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      secret,
      {
        expiresIn: "7d",
      }
    );
    return res
      .status(200)
      .json({ message: "Login Successfully", result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const register = async (req, res) => {
  const secret = process.env.JWT_SECRET_KEY;
  const { name, email, password } = req.body;

  try {
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

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "7d",
    });

    res.status(201).json({ message: "Register Successfully", result, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
