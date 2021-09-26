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
        logout: (auth, action) => {
            localStorage.clear();
            return {...auth, authData: null };
        },
    },
});

export const { auth, logout } = authSlice.actions;

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
        history.push("/dashboard/all-courses");
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
            })
        );
        history.push("/dashboard/all-courses");
    } catch (error) {
        console.log(error);
    }
};
// const url = "/users/signup";