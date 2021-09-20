import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addCourse, fetchCourses } from "./store/courses.js";
import configureStore from "./store/configureStore.js";
import { Provider } from "react-redux";
import * as actions from "./api/api.js";
const store = configureStore();

store.dispatch(
  actions.apiCallBegan({
    url: "/all-courses",
    // method: "get",
    // data: {},
    Onsuccess: "courses/coursesReceived",
  })
);
// store.dispatch(
//   actions.apiCallBegan({
//     url: "/all-courses",
//     method: "post",
//     data: { name: "nirmala" },
//     Onsuccess: "courses/addCourse",
//   })
// );
store.subscribe(() => {
  console.log("store changed", store.getState());
});

// store.dispatch(
//   addCourse({
//     _id: "asd",
//     courseName: "computer networks",
//     courseCode: "EE5303",
//     info: "introduction to computer networks",
//     instructor: {
//       name: "thilina weerasinghe",
//       qualifications: "Phd",
//     },
//     learningOutcomes: "learningOutcomes",
//     passcode: "123445",
//   })
// );
// store.dispatch(fetchCourses({ data }));

// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
