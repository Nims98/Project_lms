import express from "express";

import { getCourses } from "../controllers/courses.js";
import { createCourses } from "../controllers/courses.js";
import { addReview } from "../controllers/courses.js";
import { deleteCourse } from "../controllers/courses.js";
import auth from "./../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getCourses);
// router.post("/", auth, createCourses);

router.post("/", createCourses);
router.patch("/:id", addReview);
router.delete("/:id", deleteCourse);

export default router;