import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  drawer: {
    display: "flex",
    width: "300px",
  },
});

const SideBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.drawer}>
      <Drawer variant="permanent">
        <List>
          <ListItem button>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="All Courses" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="My Courses" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideBar;
