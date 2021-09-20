import React from "react";
import HomePage from "./components/LandingPage/HomePage";
import SideBar from "./components/SideBar";
import DashBoard from "./components/Dashboard/DashBoard";
import EnrollPage from "./components/Dashboard/EnrollPage";
import CourseView from "./components/Dashboard/CourseView";
import NavBar from "./components/Dashboard/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyCourses from "./components/Dashboard/MyCourses";
import LoginForm from "./components/LandingPage/LoginForm";
import Basic from "./components/test";
import SignUp from "./components/LandingPage/SignUp";
import { Fade } from "@material-ui/core";
import AddCourse from "./components/AddCourse";

const App = () => {
  return (
    <div>
      <Router>
        <Fade in>
          <Switch>
            <AddCourse />
            {/* <Basic /> */}
            {/* <LoginForm /> */}
            {/* <Route path="/" component={DashBoard} /> */}
            {/* <EnrollPage /> */}
            {/* <Route exact path="/" component={HomePage} /> */}
            {/* <Route exact path="/sign-up" component={SignUp} /> */}

            {/* <NavBar /> */}
            {/* <MyCourses /> */}
            {/* <SignUp /> */}
          </Switch>
        </Fade>
      </Router>
    </div>
  );
};

export default App;
