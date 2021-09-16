import React from "react";
import HomePage from "./components/HomePage";
import SideBar from "./components/SideBar";
import DashBoard from "./components/DashBoard";
import EnrollPage from "./components/EnrollPage";
import CourseView from "./components/CourseView";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyCourses from "./components/MyCourses";
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
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
