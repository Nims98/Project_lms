import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./rootReducer.js";
import api from "../api/index.js";
import coursesReducer from "./courses.js";

export default function() {
    return configureStore({
        reducer: {
            courses: coursesReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
    });
}