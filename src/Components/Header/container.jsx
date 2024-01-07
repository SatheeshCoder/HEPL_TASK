import React from "react";
import {
  AppBar,
  Toolbar,

  InputBase,
 
  IconButton,

  Box,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import Logo from "../../assets/LOGO-HEPL.png";
import { red } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import MyIcon from "./Nav_Btn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import HomeIcon from "@mui/icons-material/Home";
import MyButton from "../../UI/Button";

const GradientAppBar = makeStyles((theme) => ({
  appBar: {
    background: `linear-gradient(to right, #2caa85, #1d9aba)`,
    position: "sticky",
    top: 0,
    zIndex: 1000,
    // backdropFilter: "blur(8px)",
    // Adds a blur effect to the transparent background
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Transparent white background
    color: red,
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.9)", // Slightly less transparent on hover
    },
  },
}));

const Header = () => {
  const classes = GradientAppBar();

  return (
    <AppBar
      id="sticky-appbar"
      position="static"
      sx={{ position: "sticky", top: 0 }}
      className={classes.appBar}
      
    >
      <Toolbar>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={2}>
            <Box
              component="img"
              sx={{
                height: 80,
                width: "100%",
                maxWidth: 200,
                maxHeight: 80,
                mx: "auto",
              }}
              alt="The house from the offer."
              src={Logo}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              display="flex"
              className={classes.search}
              borderRadius="3px"
              height="100%"
            >
              <IconButton type="button" sx={{ p: 1 }}>
                <SearchIcon color="success" />
              </IconButton>
              <InputBase
                sx={{
                  ml: 2,
                }}
                placeholder="Search"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              display="flex"
              justifyContent={{ xs: "center", md: "flex-end" }}
              alignItems="center"
            >
              <MyButton
                variant="contained"
                startIcon={<AddIcon />}
                size="medium"
                color="primary"
                sx={{ mr: 2 }}
              >
                Add Asset
              </MyButton>
              <MyIcon icon={<GitHubIcon color="primary" />} />
              <MyIcon icon={<PermContactCalendarIcon color="primary" />} />
              <MyIcon icon={<HomeIcon color="primary" />} />
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
