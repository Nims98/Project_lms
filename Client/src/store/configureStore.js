import { configureStore } from "@reduxjs/toolkit";
import reducer from "./rootReducer.js";
import api from "../api/index.js";
export default function() {
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
    });
}