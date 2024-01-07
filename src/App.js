
import React from "react";
import { ThemeProvider } from "@mui/material/styles"; 
import theme from "./Theme/Theme"; 
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "./Layout/Index";
function App() {
  return (
    <div className="App">
   <ThemeProvider theme={theme}>
    <CssBaseline/>
     <Layout/>
    </ThemeProvider>
    </div>
  );
}

export default App;
