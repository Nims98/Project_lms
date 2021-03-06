import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Fade } from "@material-ui/core";
import HomePage from "./components/LandingPage/HomePage";
import EnrollPage from "./components/Dashboard/EnrollPage";
import CourseView from "./components/Dashboard/CourseView/CourseView";
import NavBar from "./components/Dashboard/NavBar";
import MyCourses from "./components/Dashboard/MyCourses";
import AddCourse from "./components/AddCourse";
import Profile from "./components/Dashboard/Profile";
import Allcourses from "./components/Dashboard/AllCourses";

const App = () => {
  return (
    <Router>
      {/* <NavBar /> */}
      <Route path="/dashboard/" component={NavBar} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Fade in>
          <Switch>
            <Route exact path="/dashboard/all-courses" component={Allcourses} />
            <Route exact path="/dashboard/my-courses" component={MyCourses} />
            <Route exact path="/dashboard/profile" component={Profile} />
            <Route path="/dashboard/all-courses/enroll-course/:id" component={EnrollPage} />
            <Route path="/dashboard/my-courses/course-view/:id" component={CourseView} />
            <Route exact path="/" component={HomePage} />
            {/* <Route exact path="/sign-up" component={SignUp} /> */}
            <Route exact path="/dashboard/all-courses/add-course" component={AddCourse} />
          </Switch>
        </Fade>
      </div>
    </Router>
  );
};

export default App;
