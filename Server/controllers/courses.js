import Course from "../models/courses.js";

export const getCourses = async(req, res) => {
    try {
        const courses = await Course.find();

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

export const addReview = async(req, res) => {
    const { id: _id } = req.params;
    const { review } = req.body;
    const updatedCourse = await Course.findByIdAndUpdate(_id, { $addToSet: { reviews: [review] } }, { new: true });
    res.json(updatedCourse);
};