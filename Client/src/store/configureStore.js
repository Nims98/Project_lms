import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./rootReducer.js";
import api from "../middleware/index.js";
import coursesReducer from "./courses.js";
import usersReducer from "./users.js";
import authReducer from "./auth.js";

export default function() {
    return configureStore({
        reducer: {
            // users: usersReducer,
            courses: coursesReducer,
            auth: authReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
    });
}