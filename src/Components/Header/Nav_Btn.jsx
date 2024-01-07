import React from "react";
import Card from "@mui/material/Card";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  pageIcon: {
    display: "inline-block",
    padding: "10px 10px 0px 10px",
    color: "#3c44b1",
  },
});
function Headicon(props) {
  const classes = useStyles();
  const { icon } = props;
  return (
    <>
      <Card className={classes.pageIcon} sx={{mr:2}}>{icon}</Card>
    </>
  );
}

export default Headicon;
