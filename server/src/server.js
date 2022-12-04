import app from "./app";
import config from "./config/config";
import connectDB from "./config/db";

connectDB();

const server = app.listen(
  config.PORT,
  console.log(
    `Server running in ${config.NODE_ENV} mode on port ${config.PORT}`
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(err);
  // Close server & exit process
  server.close(() => process.exit(1));
});
