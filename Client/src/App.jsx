import React from "react";
import HomePage from "./components/HomePage";
import SideBar from "./components/SideBar";
import DashBoard from "./components/Dashboard/DashBoard";
import EnrollPage from "./components/Dashboard/EnrollPage";
import CourseView from "./components/Dashboard/CourseView";
import NavBar from "./components/Dashboard/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyCourses from "./components/Dashboard/MyCourses";
import LoginForm from "./components/LoginForm";
import SignIn from "./components/test";
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          {/* <SignIn /> */}
          {/* <LoginForm /> */}
          {/* <Route path="/" component={DashBoard} /> */}
          {/* <EnrollPage /> */}
          <HomePage />
          {/* <NavBar /> */}
          {/* <MyCourses /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
