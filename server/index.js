import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import Connection from "./database/db.js";

import Routes from "./routes/HomeRoute.js";
import authRouter from "./routes/AuthRoute.js"
import okRouter from "./routes/OkRouter.js";
import auth from "./middleware/auth.js";

const app = express();

dotenv.config();

app.use(bodyParser.json()); 

app.use(cors());

app.use("/", Routes);
app.use("/auth", authRouter);
app.use("/ok", auth,okRouter);

const PORT = 5000;

Connection();

app.listen(PORT, () =>
  console.log(`Server is running successfully on http://localhost:${PORT}`)
);
