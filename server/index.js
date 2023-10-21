import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import Connection from "./database/db.js";

import Routes from "./routes/HomeRoute.js";
import authRouter from "./routes/AuthRoute.js"

const app = express();

dotenv.config();

app.use(bodyParser.json()); 

app.use(cors());

app.use("/", Routes);
app.use("/auth", authRouter);

const PORT = 5000;

Connection();

app.listen(PORT, () =>
  console.log(`Server is running successfully on http://localhost:${PORT}`)
);
