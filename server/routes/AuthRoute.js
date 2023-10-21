import express from "express";
import { login, register } from "../controller/userController.js";

const authRouter = express.Router();

authRouter.post("/register", register); //async (req, res) => {res.status(200).json({ message: "user register" });}
authRouter.post("/login", login); //async (req, res) => {res.status(200).json({ message: "user login" });}

export default authRouter;
