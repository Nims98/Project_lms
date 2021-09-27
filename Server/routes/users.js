import express from "express";

import { logIn, signUp, updateUser } from "../controllers/users.js";

const router = express.Router();

router.post("/login", logIn);
router.post("/signup", signUp);
router.patch("/:id", updateUser);

export default router;