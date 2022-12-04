import jwt from "jsonwebtoken";

import User from "../models/User";

import config from "../config/config";

import asyncHandler from "./asyncHandler";
import { UnauthenticatedError, UnauthorizedError } from "../errors";

const isLoggedIn = asyncHandler(async (req, res, next) => {
  let token = req.cookies.token;

  if (!token) {
    return next(new UnauthenticatedError("Authentication failed"));
  }
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return next(new UnauthenticatedError("Authentication failed"));
  }
});

export { isLoggedIn };
