import express from "express";
import { getRegister, login, register } from "../controller/userController.js";

const authRouter = express.Router();

authRouter.post("/login", login); //async (req, res) => {res.status(200).json({ message: "user login" });}
authRouter.post("/register", register); //async (req, res) => {res.status(200).json({ message: "user register" });}
authRouter.get("/register", getRegister);

export default authRouter;
