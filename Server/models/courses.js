import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    _id: String,
    courseName: String,
    courseCode: String,
    info: String,
    instructor: {
        name: String,
        qualifications: String,
    },
    learningOutcomes: [String],
    reviews: String,
    passcode: String,
});

const Course = mongoose.model("Course", courseSchema);

export default Course;