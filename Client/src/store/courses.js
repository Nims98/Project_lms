import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../middleware/api";
import moment from "moment";

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
        courseUpdated: (courses, action) => {
            console.log(action.payload);
            return action.payload;
        },
        courseDeleted: (courses, action) => {
            console.log(action.payload);
            return action.payload;
        },
    },
});
export const { courseAdded, courseUpdated, coursesReceived, coursesRequested, coursesRequestedFailed, courseDeleted } =
CourseSilce.actions;

export default CourseSilce.reducer;

//Action creators
const url = "/all-courses";

export const loadCourses = () => (dispatch, getState) => {
    const { lastFetch } = getState().courses;
    const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
    if (diffInMinutes < 10) return;
    if (!localStorage.getItem("profile")) return;
    dispatch(
        apiCallBegan({
            url,
            Onstart: coursesRequested.type,
            headers: {
                authorization: `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`,
            },
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

export const addReview = (review, courseId) => (dispatch) => {
    dispatch(
        apiCallBegan({
            url: `all-courses/${courseId}`,
            method: "patch",
            data: review,
            Onsuccess: courseUpdated.type,
        })
    );
};
export const deleteCourse = (courseId) => (dispatch) => {
    dispatch(
        apiCallBegan({
            url: `all-courses/${courseId}`,
            method: "delete",
            Onsuccess: courseDeleted.type,
        })
    );
};