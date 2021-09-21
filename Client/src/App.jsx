import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Fade } from "@material-ui/core";
import HomePage from "./components/LandingPage/HomePage";
// import SideBar from "./components/SideBar";
// import EnrollPage from "./components/Dashboard/EnrollPage";
// import CourseView from "./components/Dashboard/CourseView";
// import NavBar from "./components/Dashboard/NavBar";
// import MyCourses from "./components/Dashboard/MyCourses";
// import LoginForm from "./components/LandingPage/LoginForm";
// import Basic from "./components/test";
import SignUp from "./components/LandingPage/SignUp";
import DashBoard from "./components/Dashboard/DashBoard";
import AddCourse from "./components/AddCourse";

const App = () => {
  return (
    <div>
      <Router>
        <Fade in>
          <Switch>
            {/* <Route exact path="/add-course" component={AddCourse} /> */}
            {/* <AddCourse /> */}
            {/* <Basic /> */}
            {/* <LoginForm /> */}
            <Route path="/dashboard/" component={DashBoard} />
            {/* <EnrollPage /> */}
            <Route exact path="/" component={HomePage} />
            <Route exact path="/sign-up" component={SignUp} />

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
