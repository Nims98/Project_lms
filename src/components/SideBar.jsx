import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  drawer: {
    width: "160px",
  },
});

const SideBar = () => {
  const classes = useStyles();
  return (
    <div>
      <Drawer className={classes.drawer} variant="permanent">
        <List>
          <ListItem button>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Departments" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Semesters" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideBar;
