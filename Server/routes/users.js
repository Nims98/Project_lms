import express from "express";

import { logIn, signUp, updateUser, enrollCourse, getUser } from "../controllers/users.js";

const router = express.Router();

router.post("/login", logIn);
router.post("/signup", signUp);
router.patch("/:id", updateUser);
router.patch("/enroll-course/:id", enrollCourse);
router.get("/:id", getUser);

export default router;