import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./../middleware/api";

const UserSlice = createSlice({
    name: "users",
    initialState: {
        list: [],
        loading: false,
    },
    reducers: {
        userAdded: (users, action) => {
            users.list.push(action.payload);
            localStorage.setItem("profile", JSON.stringify(action.payload));
            return {...users, users: action.payload };
        },
        userLogin: (users, action) => {
            localStorage.setItem("profile", JSON.stringify(action.payload));
            users.list = action.payload;
            return {...users, users: action.payload };
        },
    },
});

export const { userAdded, userLogin } = UserSlice.actions;

export default UserSlice.reducer;

export const addUser = (user, history) => async(dispatch) => {
    try {
        dispatch(
            apiCallBegan({
                url: "/users/signup",
                method: "post",
                data: user,
                Onsuccess: userAdded.type,
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
                Onsuccess: userLogin.type,
            })
        );
        history.push("/dashboard/all-courses");
    } catch (error) {
        console.log(error);
    }
};