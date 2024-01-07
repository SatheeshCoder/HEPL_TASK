import React from "react";
import { Container, Grid } from "@mui/material";
import Topbar from "../Components/Header/container";
import Topleft from "../Components/Card/Groupcard";
import Imagecard from "../Components/Card/Imagecard";
import RightSidebar from "../Components/Card/Rightsidebar"
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Topbar />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {/* Top Left Grid Item */}
          <Grid item xs={12} md={3}>
            <Topleft />
          </Grid>

          {/* Image Card Grid Item */}
          <Grid item xs={12} md={6}>
            <Imagecard />
          </Grid>

          {/* Top Right Grid Item */}
          <Grid item xs={12} md={3}>
            <RightSidebar />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
