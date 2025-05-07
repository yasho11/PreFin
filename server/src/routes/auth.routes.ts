// routes/user.routes.ts

import { Router } from "express";
import express from "express";
import { registerUser } from "../controllers/auth.controllers";

const router = express.Router();

//POST /register to create a new user

router.post("/register", registerUser);

export default router;
