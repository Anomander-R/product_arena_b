require("dotenv").config();

const config = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,

  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRE: process.env.JWT_EXPIRE,
  JWT_COOKIE_EXPIRE: process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000,

  MAX_FILE_UPLOAD: process.env.MAX_FILE_UPLOAD || 5000,
  FILE_UPLOAD_PATH: process.env.FILE_UPLOAD_PATH,
};

export default config;
