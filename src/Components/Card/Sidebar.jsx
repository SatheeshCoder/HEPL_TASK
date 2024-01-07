import React from "react";
import MyButton from "../../UI/Button";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import  Link  from "@mui/material/Link";
import { H2, Small } from "../Typograpy/Typography";
import { Card } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  gradientButton: {
    color: "linear-gradient(to right, #2196F3, #4CAF50)", // Text color
    border: "3px solid",
    borderImageSlice: 1,
    borderImageSource: "linear-gradient(to right, #2196F3, #4CAF50)", // Border
    "&:hover": {
      background: "linear-gradient(to right, #4CAF50, #2196F3)", // Gradient on hover
      borderColor: "#ffff",
      color: "#ffff", // Border color on hover
    },
  },
  title: {
    color: "#03a9f4",
    fontWeight: "bold",
  },
  content: { fontWeight: "bold" },
}));

function GroupContainer({ title, items, showAvatar, onCreateGroup }) {
  const classes = useStyles();
const gradientStyle = showAvatar
  ? {
      background: `-webkit-linear-gradient(left, #2caa85, #1d9aba)`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "bold",
      cursor: "pointer",
    }
  : {};
  return (
    <>
      <Paper
        elevation={3}
        sx={{ mt: 2, p: 3, borderRadius: "8px" }}
      >
        <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <H2 className={classes.title}>{title}</H2>
            {showAvatar && (
              <Small
                component={Link}
                style={gradientStyle}
                className={classes.content}
              >
                show all
              </Small>
            )}
          </Box>
          {items.map((item, index) => (
            <Stack
              key={index}
              spacing={2}
              direction="row"
              alignItems="center"
              sx={{
                my: 1,
                mx: "auto",
              }}
            >
              {showAvatar && (
                <Card>
                  <Avatar
                    sx={{
                      width: { xs: 30, sm: 40, md: 50 },
                      height: { xs: 30, sm: 40, md: 50 },
                      borderRadius: "10px",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      border: "2px solid #fff",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                      img: {
                        objectFit: "cover",
                        objectPosition: "center",
                      },
                    }}
                    variant="rounded"
                    alt={`Item ${index + 1}`}
                    src={item.image}
                  />
                </Card>
              )}
              <Small noWrap className={classes.content} >
                {item.message}
              </Small>
            </Stack>
          ))}
          {showAvatar && (
            <MyButton
              variant="outlined"
              fullWidth
              className={classes.gradientButton}
              onClick={onCreateGroup}
            >
              Create Group
            </MyButton>
          )}
        </Box>
      </Paper>
    </>
  );
}

export default GroupContainer;
