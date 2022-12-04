import User from "../models/User";

import { asyncHandler } from "../middleware";
import sendTokenResponse from "../utils/sendTokenResponse";
import { BadRequestError, UnauthenticatedError } from "../errors";

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new BadRequestError("Please provide email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new UnauthenticatedError("Pogresan e-mail ili password"));
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new UnauthenticatedError("Pogresan e-mail ili password"));
  }

  sendTokenResponse(user, 200, res);
});

const logout = asyncHandler(async (req, res, next) => {
  res.cookie("token", "", { maxAge: 0, httpOnly: true });

  res.status(200).json({
    success: true,
  });
});

const getMe = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: req.user,
  });
});

export { login, logout, getMe };
