import express from "express";

import { logIn } from "../controllers/users.js";
import { signUp } from "../controllers/users.js";

const router = express.Router();

router.get("/login", logIn);
router.post("/signup", signUp);

export default router;