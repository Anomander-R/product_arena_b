import Patient from "../models/Patient";

import { asyncHandler } from "../middleware";
import { sendResponse } from "../utils/successResponse";

const getPatients = asyncHandler(async (req, res, next) => {
  const patients = await Patient.find();

  sendResponse(res, { patients });
});

export { getPatients };
