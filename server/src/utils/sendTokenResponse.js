import config from "../config/config";

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(Date.now() + config.JWT_COOKIE_EXPIRE),
    httpOnly: true,
  };

  if (config.NODE_ENV === "production") {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, role: user.role });
};

export default sendTokenResponse;
