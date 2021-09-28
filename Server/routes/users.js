import express from "express";

import { logIn, signUp, updateUser, enrollCourse } from "../controllers/users.js";

const router = express.Router();

router.post("/login", logIn);
router.post("/signup", signUp);
router.patch("/:id", updateUser);
router.patch("/enroll-course/:id", enrollCourse);

export default router;