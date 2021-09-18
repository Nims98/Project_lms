import Course from "../models/courses.js";
export const getCourses = async(req, res) => {
    try {
        const courses = await Course.find();
        console.log(courses);
        res.status(200).json(courses);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
export const createCourses = async(req, res) => {
    const course = req.body;
    const newCourse = Course(course);
    try {
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};