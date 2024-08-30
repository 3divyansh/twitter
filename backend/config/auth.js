import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({
  path: "../config/.env",
});
const isAuthenticated = async (req, res, next) => {
  try {
    const token = {
    token :  req.cookies.body 
  };
    if (!token) {
      return res.status(401).json({
        message: "user not Unauthorized",
        success: false,
      });
    }
    const decode = await jwt.sign(token, process.env.TOKEN_SECRET);
    req.user = await decode.userId;
    next();
  }
  catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({
      message: "Invalid Token",
      success: false,
    });
  }
};


export default isAuthenticated;