import express from "express";

import { getCourses } from "../controllers/courses.js";
import { createCourses } from "../controllers/courses.js";
import auth from "./../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getCourses);
// router.post("/", auth, createCourses);
// router.get("/", getCourses);
router.post("/", createCourses);

export default router;