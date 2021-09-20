import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api/api";

const CourseSilce = createSlice({
    name: "courses",
    initialState: {
        list: [],
        loading: false,
        lastFetch: null,
    },
    reducers: {
        coursesRequested: (courses, action) => {
            courses.loading = true;
        },
        coursesRequestedFailed: (courses, action) => {
            courses.loading = false;
        },
        coursesReceived: (courses, action) => {
            courses.list = action.payload;
            courses.loading = false;
            courses.lastFetch = Date.now();
        },
        courseAdded: (courses, action) => {
            courses.list.push(action.payload);
        },
    },
});
export const {
    courseAdded,
    coursesReceived,
    coursesRequested,
    coursesRequestedFailed,
} = CourseSilce.actions;

export default CourseSilce.reducer;

//Action creators
const url = "/all-courses";

export const loadCourses = () => (dispatch, getState) => {
    const { lastFetch } = getState().courses;
    console.log(lastFetch);
    dispatch(
        apiCallBegan({
            url,
            Onstart: coursesRequested.type,
            Onsuccess: coursesReceived.type,
            OnError: coursesRequestedFailed.type,
        })
    );
};

export const addCourse = (course) =>
    apiCallBegan({
        url,
        method: "post",
        data: course,
        Onsuccess: courseAdded.type,
    });