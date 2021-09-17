import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 330,
    minHeight: 220,
    borderRadius: 10,
    margin: 10,
  },
});
const Course = ({ courseName, courseCode, info }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h4">{courseCode}</Typography>
        <Typography variant="h5">{courseName}</Typography>
        <Typography variant="p">{info}</Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};

export default Course;
