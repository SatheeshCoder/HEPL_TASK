import React from "react";
import { Grid } from "@mui/material";
import GroupContainer from "./Sidebar";
import Cover1 from "../../assets/cover_1.jpg";
import Cover2 from "../../assets/cover_2.jpg";
import Cover3 from "../../assets/cover_3.jpg";
import Cover4 from "../../assets/cover_4.jpg";
import Cover5 from "../../assets/cover_5.jpg";

function App() {
  const messagesWithAvatars = [
    {
      message: "Packing ideation",
      image: Cover1,
    },
    {
      message: "R&D for New Product",
      image: Cover2,
    },
    {
      message: "R&D for New Product",
      image: Cover3,
    },
    { message: "ATL plan", image: Cover1 },
    {
      message: "Artwork for ecommerce",
      image: Cover4,
    },
    {
      message: "R&D",
      image: Cover5,
    },
  ];

  const messagesWithoutAvatars = [
    { message: "#Salesboast" },
    { message: "#Market" },
    { message: "#Worktime" },
    { message: "#Research" },
    { message: "#indianstandard" }, // ... other items
  ];

  const handleCreateGroup = () => {
    // Add logic for creating a group
    console.log("Creating group...");
  };

  return (
    <Grid container spacing={3}>
      {/* Group with avatars */}
      <Grid item xs={12} md={12}>
        <GroupContainer
          title="Groups"
          items={messagesWithAvatars}
          showAvatar
          onCreateGroup={handleCreateGroup}
        />
      </Grid>

      {/* Group without avatars */}
      <Grid item xs={12} md={12}>
        <GroupContainer
          title="Top Topics"
          items={messagesWithoutAvatars}
          showAvatar={false}
          onCreateGroup={handleCreateGroup}
        />
      </Grid>
    </Grid>
  );
}

export default App;
