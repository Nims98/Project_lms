import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActions, CardActionArea, ButtonBase } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCourse } from "../../store/courses.js";

const Course = ({ course, enrolled }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const [isAdmin, setisAdmin] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("profile")).result.email === "myadmin@gmail.com") setisAdmin(true);
  }, location);
  // const classes = useStyles();
  const enrollCourse = () => history.push(`/dashboard/all-courses/enroll-course/${course._id}`);
  const openCourse = () => history.push(`/dashboard/my-courses/course-view/${course._id}`);

  return (
    <Card style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
      <ButtonBase onClick={!enrolled ? enrollCourse : openCourse} style={{ textAlign: "left", alignItems: "top" }}>
        <CardActionArea style={{ width: 270, height: 200 }}>
          <CardContent>
            <Typography variant="h4">{course.courseCode}</Typography>
            <Typography variant="h5">{course.courseName}</Typography>
            <Typography variant="p">{course.info}</Typography>
          </CardContent>
        </CardActionArea>
      </ButtonBase>
      {isAdmin && (
        <CardActions>
          <IconButton onClick={dispatch(deleteCourse(course._id))}>
            <Delete />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
};

export default Course;
