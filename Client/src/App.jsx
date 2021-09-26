import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Fade } from "@material-ui/core";
import HomePage from "./components/LandingPage/HomePage";
// import SideBar from "./components/SideBar";
import EnrollPage from "./components/Dashboard/EnrollPage";
import CourseView from "./components/Dashboard/CourseView";
import NavBar from "./components/Dashboard/NavBar";
import MyCourses from "./components/Dashboard/MyCourses";
// import LoginForm from "./components/LandingPage/LoginForm";
// import Basic from "./components/test";
import SignUp from "./components/Auth/SignUp";
// import DashBoard from "./components/Dashboard/DashBoard";
import AddCourse from "./components/AddCourse";
import Home from "./components/Dashboard/Home";
import Profile from "./components/Dashboard/Profile";

const App = () => {
  return (
    <Router>
      {/* <NavBar /> */}
      <Route path="/dashboard/" component={NavBar} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Fade in>
          <Switch>
            <Route exact path="/dashboard/all-courses" component={Home} />
            <Route exact path="/dashboard/my-courses" component={MyCourses} />
            <Route exact path="/dashboard/profile" component={Profile} />
            <Route path="/dashboard/all-courses/enroll-course" component={EnrollPage} />
            <Route path="/dashboard/my-courses/course-view" component={CourseView} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/dashboard/add-course" component={AddCourse} />
          </Switch>
        </Fade>
      </div>
    </Router>
  );
};

export default App;
