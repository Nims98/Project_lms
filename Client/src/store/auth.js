import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../middleware/api";

const authSlice = createSlice({
    name: "auth",
    initialState: { authData: null },
    reducers: {
        auth: (auth, action) => {
            localStorage.setItem("profile", JSON.stringify(action.payload));
            console.log(action.payload);

            return {...auth, authData: action.payload };
        },
        authFailed: (auth, action) => {
            console.log(action.payload);
            return action.payload;
        },
        logout: (auth, action) => {
            localStorage.clear();
            return {...auth, authData: null };
        },
        userUpdated: (auth, action) => {
            return action.payload;
        },
        courseEnrolled: (auth, action) => {
            console.log(action.payload);
            const myCourses = action.payload.courses;
            localStorage.setItem("courses", JSON.stringify(myCourses));
            return action.payload;
        },
    },
});

export const { auth, authFailed, logout, userUpdated, courseEnrolled, userReceived } = authSlice.actions;

export default authSlice.reducer;

// Action Creators
export const addUser = (user, history) => async(dispatch) => {
    try {
        dispatch(
            apiCallBegan({
                url: "/users/signup",
                method: "post",
                data: user,
                Onsuccess: auth.type,
            })
        );
        // history.push("/dashboard/all-courses");
    } catch (error) {
        console.log(error);
    }
};
export const loginUser = (user, history) => (dispatch) => {
    try {
        dispatch(
            apiCallBegan({
                url: "/users/login",
                method: "post",
                data: user,
                Onsuccess: auth.type,
                OnError: authFailed,
            })
        );

        // history.push("/dashboard/all-courses");
    } catch (error) {
        history.push("/");
        console.log(error);
    }
};

export const updateUser = (user, currentUserId) => (dispatch) => {
    dispatch(
        apiCallBegan({
            url: `users/${currentUserId}`,
            method: "patch",
            data: user,
            Onsuccess: userUpdated.type,
        })
    );
};

export const enrollCourse = (courseId, currentUserId) => (dispatch) => {
    dispatch(
        apiCallBegan({
            url: `users/enroll-course/${currentUserId}`,
            method: "patch",
            data: courseId,
            Onsuccess: courseEnrolled.type,
        })
    );
};