import React from "react";
import { Box, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles"; 
import { H3, Small } from "../Typograpy/Typography";
const useStyles = makeStyles({
  pageHeader: {
    marginBottom: "10px",
    display: "flex",
    padding: "5px 5px",
  },
  pageIcon: {
    display: "inline-block",
    padding: "16px",
    color: "#3c44b1",
  },
  pageTitle: {
    paddingLeft: "20px",
  },
  title: {
    fontSize: "15px!important",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  title2: {
    color: "#03a9f4",
    fontSize: "15px!important",
    fontWeight: "bold",
  },title1:{
     fontSize: "17px!important",
    fontWeight: "bold!important",
  }
});

const PageHeader = (props) => {
  const classes = useStyles();

  const { title, subTitle, icon, middleTitle } = props;

  return (
    <Paper elevation={0} square>
      <div className={classes.pageHeader}>
        <Box display={"flex"} alignItems={"center"}>
          {icon}
        </Box>
        <div className={classes.pageTitle}>
          <H3 className={classes.title1} marginBottom={"8px"}>{title}</H3>
          <Small className={classes.title}>{subTitle}</Small> <br />
          <Small className={classes.title2}>{middleTitle}</Small>
        </div>
      </div>
    </Paper>
  );
};

export default PageHeader;
