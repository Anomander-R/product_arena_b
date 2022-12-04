import { StatusCodes } from "http-status-codes";
import CustomError from "./Custom";

class UnauthorizedError extends CustomError {
  constructor(message) {
    super(message || "Unauthorized");
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

export default UnauthorizedError;
