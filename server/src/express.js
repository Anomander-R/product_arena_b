import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import compress from "compression";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compress());

// Set security headers
app.use(helmet());

// Enable cors
app.use(cors());

app.use("/", express.static("public"));

export default app;
