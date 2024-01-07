import React from "react";
import Button from "@mui/material/Button";

// Custom Button Component
const MyButton = (props) => {
  return <Button {...props}>{props.children}</Button>;
};

export default MyButton;
