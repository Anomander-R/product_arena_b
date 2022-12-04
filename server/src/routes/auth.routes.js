import express from "express";

import { getMe, login, logout } from "../controllers/auth.controller";

import { isLoggedIn } from "../middleware";

const router = express.Router();

router.post("/login", login);

router.get("/logout", logout);

router.get("/me", isLoggedIn, getMe);

export default router;
