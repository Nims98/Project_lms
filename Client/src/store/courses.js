import { createSlice } from "@reduxjs/toolkit";

const CourseSilce = createSlice({
    name: "courses",
    initialState: [],
    reducers: {
        coursesReceived: (courses, action) => {
            return action.payload;
        },
        addCourse: (courses, action) => {
            courses.push({
                _id: "action.payload._id",
                courseName: "action.payload.courseName",
                courseCode: "action.payload.courseCode",
                info: "action.payload.info",
                instructor: {
                    name: "action.payload.instructor.name",
                    qualifications: "action.payload.instructor.qualifications",
                },
                learningOutcomes: "action.payload.learningOutcomes",
                passcode: "action.payload.passcode",
                // _id: action.payload._id,
                // courseName: action.payload.courseName,
                // courseCode: action.payload.courseCode,
                // info: action.payload.info,
                // instructor: {
                //     name: action.payload.instructor.name,
                //     qualifications: action.payload.instructor.qualifications,
                // },
                // learningOutcomes: action.payload.learningOutcomes,
                // passcode: action.payload.passcode,
            });
        },

        fetchCourses: (courses, action) => {
            return action.payload;
        },
    },
});

export const { addCourse, fetchCourses, coursesReceived } = CourseSilce.actions;

export default CourseSilce.reducer;