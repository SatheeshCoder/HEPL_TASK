import React from "react";
import MyButton from "../../UI/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { H2 } from "../Typograpy/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined"
import Chip from "@mui/material/Chip";
import GroupIcon from "@mui/icons-material/Group";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";import QuizIcon from "@mui/icons-material/Quiz";
import Mycard from "../Header/Nav_Btn";
import Userview from "./Userview";
import Customer from "../../assets/data.jpg";
import { blue, pink } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  gradientButton: {
    background: "linear-gradient(to right, #4CAF50, #2196F3)",
    border: "3px solid",
    borderImageSlice: 1,
    borderImageSource: "linear-gradient(to right, #2196F3, #4CAF50)",
    "&:hover": {
      background: "linear-gradient(to right, #4CRF50, #2196F3)",
      borderColor: "#ffff",
      color: "#ffff",
    },
  },
  title: {
    color: "RGB(28, 32, 37)",
    fontWeight: "bold",
    marginBottom: "16px!important",
  },
  content: { fontWeight: "bold" },
  slash: {
    color: pink[400],
  },
}));

const StyledBreadcrumb = styled(Chip)(({ theme }) => {

  return {
    
    height: theme.spacing(3),
  };
});

function ImageContainer() {
  const classes = useStyles();

  return (
    <>
      {/* Paper container with elevation and spacing */}
      <Paper elevation={3} sx={{ mt: 2, p: 3, borderRadius: "8px" }}>
        <Box sx={{ overflow: "hidden" }}>
          {/* Breadcrumbs and Add Grams button */}
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={<span className={classes.slash}>/</span>}
          >
            {/* Mycard component for the first breadcrumb */}
            <Mycard
              icon={<HomeWorkOutlinedIcon style={{ color: blue[200] }} />}
              className={classes.gradientButton}
            />
            {/* Other breadcrumbs with StyledBreadcrumb component */}
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Packaging"
              sx={{ fontSize: "16px", fontWeight: "bold", ...classes.label }}
              icon={<GroupIcon fontSize="small" style={{ color: pink[400] }} />}
            />
            <StyledBreadcrumb
              component="a"
              href="#"
              sx={{ fontSize: "16px", fontWeight: "bold", ...classes.label }}
              label="marketing"
              icon={<QuizIcon fontSize="small" style={{ color: pink[400] }} />}
            />
            <StyledBreadcrumb
              sx={{ fontSize: "16px", fontWeight: "bold", ...classes.label }}
              Marketing
              strategy
              to
              increase
              yoy
              Revenue
              label="
            Marketing strategy to increase yoy Revenue
              
              
              "
              icon={
                <CollectionsOutlinedIcon
                  fontSize="small"
                  style={{ color: pink[400] }}
                />
              }
            />
          </Breadcrumbs>

          {/* Add Grams button with responsive margin */}
          <Box textAlign={"end"} sx={{ mt: { xs: 2, md: 0 } }}>
            <MyButton variant="contained" className={classes.gradientButton}>
              Add Grams
            </MyButton>
          </Box>

          {/* Marketing strategy title */}
          <H2 className={classes.title}>
            Marketing strategy to increase yoy Revenue
          </H2>

          {/* Userview component */}
          <Box sx={{ mb: 2 }}>
            <Userview />
          </Box>

          {/* Customer image with responsive styling */}
          <Paper
            elevation={3}
            sx={{ borderRadius: "10px", overflow: "hidden" }}
          >
            <img
              src={Customer}
              alt="Your"
              style={{ width: "100%", height: "auto" }}
            />
          </Paper>
        </Box>
      </Paper>
    </>
  );
}

export default ImageContainer;
