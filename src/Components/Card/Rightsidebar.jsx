import React from "react";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import { Card } from "@mui/material";
import { H2 } from "../Typograpy/Typography";
import { makeStyles } from "@mui/styles";
import PageHeader from "./Knowledge";
import { orange } from "@mui/material/colors";
const useStyles = makeStyles({
  title: {
  
    textTransform: "capitalize",
  },
});
const Employees = () => {
  const classes = useStyles();

  return (
    <>
      {/* knowlege creation rightside start */}
      <Card sx={{ mt: 2, p: 3, borderRadius: "8px" }}>
        <H2 className={classes.title} ml={1}>
          similiar Knowlege
        </H2>
        <PageHeader
          title="Marketing Innovative"
          subTitle="Face Towards brand groth and "
          middleTitle="#groth #groth"
          icon={<CollectionsOutlinedIcon fontSize="large" color="success" />}
        />
        <PageHeader
          title="Consumer Behaviour toward FMCG Product"
          subTitle="Face Towards Brand Groth And resources"
          middleTitle="#Form #strenght #growth "
          icon={<InsertLinkOutlinedIcon fontSize="large" color="primary" />}
        />
        <PageHeader
          title="Green Marketing"
          subTitle="Face towards brand and resources"
          middleTitle="#Creative#market#Growth"
          icon={<ArticleOutlinedIcon fontSize="large" color={orange[500]} />}
        />
      </Card>{" "}
      {/* packing creation rightside  start*/}
      <Card sx={{ mt: 2, p: 3, borderRadius: "8px" }}>
        <H2 className={classes.title} ml={1}>
          Knowledge from packaging Ideation
        </H2>
        <PageHeader
          title="Block chain FMCG"
          subTitle="Blockchain can be added to FMCG supply"
          middleTitle="#Blockchain  #marketing #FMGC #product "
          icon={<SubscriptionsOutlinedIcon fontSize="large" color="success" />}
        />
        <PageHeader
          title="Packaging Proposals Contact"
          subTitle="January Proposal Packaging Contact"
          middleTitle="#contact #pricing"
          icon={<ContactsOutlinedIcon fontSize="large" color="primary" />}
        />
        <PageHeader
          title="Green Marketing "
          subTitle="Face towards brand growth and power"
          middleTitle="#margeting #strategic #growth "
          icon={<ArticleOutlinedIcon fontSize="large" color={orange[500]} />}
        />
      </Card>
    </>
  );
};

export default Employees;
