import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore from "./store/configureStore.js";
import { Provider } from "react-redux";
import { addCourse } from "./store/courses.js";

const store = configureStore();

// store.dispatch(
//   addCourse({
//     _id: "action.payload._id",
//     courseName: "action.payload.courseName",
//     courseCode: "action.payload.courseCode",
//     info: "action.payload.info",
//     instructor: {
//       name: "action.payload.instructor.name",
//       qualifications: "action.payload.instructor.qualifications",
//     },
//     learningOutcomes: "action.payload.learningOutcomes",
//     passcode: "action.payload.passcode",
//   })
// );

// store.dispatch(loadCourses());

// setTimeout(() => {
//   store.dispatch(loadCourses());
// }, 3000);

// store.dispatch(
//   actions.apiCallBegan({
//     url: "/all-courses",
//     method: "post",
//     Onsuccess: "courses/courseAdded",
//     data: { name: "nirmala" },
//   })
// );

// store.subscribe(() => {
//   console.log("store changed", store.getState());
// });

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
