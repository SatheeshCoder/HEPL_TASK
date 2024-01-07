import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LogoImage from "../../assets/LOGO-HEPL.png"; // Replace with the actual path to your logo

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {"All Rights Reserved by © "}
      <Link color="inherit" href="https://hepl.com/">
        Cavin Info Tech
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0),
  },
  appBar: {
    padding: "20px",
    background: `linear-gradient(to right, #2caa85, #1d9aba)`,
    position: "sticky",
    bottom: 0,
    zIndex: 1000,
    width: "100%",
    backdropFilter: "blur(8px)",
    [theme.breakpoints.down("sm")]: {
      padding: "10px", // Adjust padding for smaller screens
    },
  },
  footer: {
    display: "flex",
    flexDirection: "column", // Adjust layout for smaller screens
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row", // Use row layout for larger screens
    },
  },
  logo: {
    width: "100px",
    height: "50px", // Set the width as needed
    marginRight: theme.spacing(2),
  },
  link: {
    paddingRight: "10px",
    margin: theme.spacing(0, 2),
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary.main, // Change color on hover
    },
  },
  separator: {
    paddingRight: "10px",
    color: "white",
    margin: "4px",
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <Box component="main" className={classes.main}>
      {/* Your main content goes here */}
      <Box className={classes.appBar}>
        <Box className={classes.footer}>
          <div className={classes.footer}>
            <img src={LogoImage} alt="Logo" className={classes.logo} />
            <Typography variant="body1">
              <Copyright />
            </Typography>
          </div>
          <div>
            <Typography component="span" className={classes.link}>
              ABOUT
            </Typography>
            <Typography component="span" className={classes.separator}>
              |
            </Typography>
            <Typography component="span" className={classes.link}>
              FAQ
            </Typography>
            <Typography component="span" className={classes.separator}>
              |
            </Typography>
            <Typography component="span" className={classes.link}>
              HELP & SUPPORT
            </Typography>
            <Typography component="span" className={classes.separator}>
              |
            </Typography>
            <Typography component="span" className={classes.link}>
              CONTACT US
            </Typography>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
