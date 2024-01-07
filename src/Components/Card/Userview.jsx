import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  
  IconButton,
  
  Badge,
} from "@mui/material";import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import UserImage from "../../assets/user.png";
import { Small, Tiny } from "../Typograpy/Typography";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom:"10px",
    
    borderRadius:"10px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  actions: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
  },
  iconButton: {
    marginLeft: "auto",
  },
  content: {
    color: "#03a9f4",
  },
}));
const limitText = (text, limit) => {
  if (text.length <= limit) {
    return text;
  } else {
    return text.slice(0, limit) + "...";
  }
};
const originalText =
  "Caption for the Instagram post goes here. You can add more details and customize the layout as needed.";
const limitedText = limitText(originalText, 30);
const InstagramPost = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ backgroundColor: "#f2f2f2" }}>
      <CardHeader
        avatar={
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar src={UserImage} sx={{ width: 56, height: 56 }} />
          </StyledBadge>
        }
        title={<Tiny>{"HEPL"}</Tiny>}
        subheader={<Small>{"Manger"}</Small>}
      />
      <CardContent>
        <Tiny>{limitedText}</Tiny><br/>
        <Tiny className={classes.content}>
          #sales boost #sales up #sales Growth
        </Tiny>
      </CardContent>

      <div className={classes.actions}>
        <IconButton>
          <LanguageOutlinedIcon />
        </IconButton>
       
        <IconButton className={classes.iconButton}>
          {/* <SendIcon /> */}
          <RemoveRedEyeOutlinedIcon />
        </IconButton>
      </div>
    </Card>
  );
};

export default InstagramPost;
