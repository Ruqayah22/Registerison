import express from "express";
// import auth from "../middleware/auth";
// import auth from "../middleware/auth";


const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).json({ message: "hello world!" });
});
// router.get("/", auth) // this for use middleware 
export default router;
