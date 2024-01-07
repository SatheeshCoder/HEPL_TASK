
import React from "react";

import Paper from "@mui/material/Paper";

const MyPaper = (props) => {
  const { children, sx } = props;

  return (
    <Paper sx={{ padding: 2, display: "flex", alignItems: "center", ...sx }}>
      {children}
    </Paper>
  );
};
export default MyPaper
