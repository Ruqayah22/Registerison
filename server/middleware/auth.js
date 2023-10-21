import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  const secret = process.env.JWT_SECRET_KEY;
  try {
    const token = req.headers.authorization.split(" ")[1];

    let decodedData;

    if (token) {
      // console.log(secret);
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    }
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default auth;
