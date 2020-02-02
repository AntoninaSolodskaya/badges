import React, { Fragment } from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
const status = ["pending", "process", "expiried", "blocked"];

const useStyles = makeStyles(theme => ({
  pending: {
    backgroundColor: "pink"
  },
  blocked: {
    backgroundColor: "blue"
  },
  expired: {
    backgroundColor: "green"
  },
  process: {
    backgroundColor: "yellow"
  }
}));

const Badges = () => {
  const classes = useStyles();
  return (
    <Fragment>
      {status.map((badge, index) => (
        <Box key={index}>
          <Button className={clsx(classes.statusBadge, classes.disabled)}>
            {badge}
          </Button>
        </Box>
      ))}
    </Fragment>
  );
};

export default Badges;
