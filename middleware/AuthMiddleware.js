import Jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";

const protect = asyncHandler(async (req, res, next) => {
  const auth = req.headers.authorization || req.body.headers.authorization;
  let token;
  if (
    auth &&
    auth.startsWith("Bearer")
    // req.headers.authorization &&
    // req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = auth.split(" ")[1];
      // token = req.headers.authorization.split(" ")[1];
      const decoded = Jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.error("Not Authorized, token failed");
      res.status(401);
      throw new Error("Not Authorized, No Token");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, No Token");
  }
});
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not Authorized as an admin");
  }
};
export { protect, admin };
