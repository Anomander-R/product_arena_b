import { StatusCodes } from "http-status-codes";
import CustomError from "./Custom";

class UnauthenticatedError extends CustomError {
  constructor(message) {
    super(message || "Unauthenticated");
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnauthenticatedError;
