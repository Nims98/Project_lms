import Course from "../models/courses.js";
// import data from "./../data.json";
const data = [{
        courseName: "Computer Networks",
        courseCode: "EE5201",
        info: "In this course you will learn how to properly develop an web application",
    },
    {
        courseName: "Computer Architecture",
        courseCode: "EE5201",
        info: "In this course you will learn how to properly develop an web application",
    },
    {
        courseName: "Software Project",
        courseCode: "EE5201",
        info: "In this course you will learn how to properly develop an web application",
    },
    {
        courseName: "Communication Systems",
        courseCode: "EE5201",
        info: "In this course you will learn how to properly develop an web application",
    },
    {
        courseName: "Power Systems",
        courseCode: "EE5201",
        info: "In this course you will learn how to properly develop an web application",
    },
    {
        courseName: "Power Electronics",
        courseCode: "EE5201",
        info: "In this course you will learn how to properly develop an web application",
    },
    {
        courseName: "Digital Electronics",
        courseCode: "EE5201",
        info: "In this course you will learn how to properly develop an web application",
    },
    {
        courseName: "Web Application Development",
        courseCode: "EE5201",
        info: "In this course you will learn how to properly develop an web application",
    },
    {
        courseName: "Database Systems",
        courseCode: "EE5201",
        info: "In this course you will learn how to properly develop an web application",
    },
    {
        courseName: "GUI",
        courseCode: "EE5201",
        info: "In this course you will learn how to properly develop an web application",
    },
    {
        courseName: "Numerical Methods",
        courseCode: "EE5201",
        info: "In this course you will learn how to properly develop an web application",
    },
    {
        courseName: "Electric Machines",
        courseCode: "EE5201",
        info: "In this course you will learn how to properly develop an web application",
    },
    {
        courseName: "Signals and Systems",
        courseCode: "EE5201",
        info: "In this course you will learn how to properly develop an web application",
    },
    {
        courseName: "Probability and Statistics",
        courseCode: "EE5201",
        info: "In this course you will learn how to properly develop an web application",
    },
    {
        courseName: "Electronic Project",
        courseCode: "EE5201",
        info: "In this course you will learn how to properly develop an web application",
    },
    {
        courseName: "Web Application Development",
        courseCode: "EE5201",
        info: "In this course you will learn how to properly develop an web application",
    },
    {
        courseName: "Web Application Development",
        courseCode: "EE5201",
        info: "In this course you will learn how to properly develop an web application",
    },
    {
        courseName: "Web Application Development",
        courseCode: "EE5201",
        info: "In this course you will learn how to properly develop an web application",
    },
    {
        courseName: "Web Application Development",
        courseCode: "EE5201",
        info: "In this course you will learn how to properly develop an web application",
    },
    {
        courseName: "Web Application Development",
        courseCode: "EE5201",
        info: "In this course you will learn how to properly develop an web application",
    },
    {
        courseName: "Hello",
        courseCode: "EE5201",
        info: "In this course you will learn how to properly develop an web application",
    },
];
export const getCourses = async(req, res) => {
    // try {
    //     const courses = await Course.find();

    //     res.status(200).json(courses);
    // } catch (error) {
    //     res.status(404).json({ message: error.message });
    // }
    const courses = data;
    res.status(200).json(courses);
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