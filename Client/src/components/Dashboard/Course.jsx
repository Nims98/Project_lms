import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActionArea, ButtonBase } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Course = ({ course, enrolled }) => {
  const history = useHistory();
  // const classes = useStyles();
  const enrollCourse = () => history.push(`/dashboard/all-courses/enroll-course/${course._id}`);
  const openCourse = () => history.push(`/dashboard/my-courses/course-view/${course._id}`);

  return (
    <ButtonBase onClick={!enrolled ? enrollCourse : openCourse}>
      <CardActionArea>
        <Card style={{ width: 270, height: 220, display: "flex", textAlign: "left" }}>
          <CardContent>
            <CardContent>
              <Typography variant="h4">{course.courseCode}</Typography>
              <Typography variant="h5">{course.courseName}</Typography>
              <Typography variant="p">{course.info}</Typography>
            </CardContent>
          </CardContent>
        </Card>
      </CardActionArea>
    </ButtonBase>
  );
};

export default Course;
