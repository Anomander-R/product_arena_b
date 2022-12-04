import express from "express";

import { getPatients } from "../controllers/patient.controller";

import { isLoggedIn } from "../middleware";

const router = express.Router();

router.get("/", isLoggedIn, getPatients);

export default router;
