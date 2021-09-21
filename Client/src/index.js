import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore from "./store/configureStore.js";
import { Provider } from "react-redux";
import { loadCourses } from "./store/courses.js";

const store = configureStore();

store.dispatch(loadCourses());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
