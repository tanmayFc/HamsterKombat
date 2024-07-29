"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { dollarCoin } from "../../assets/images/index";
import Card from "./components/card";
import bag from "../assets/icon/moneybag.png";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import Card2 from "./components/card2";
import profile from "../assets/icon/profileicon.png";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


export default function App() {
  return (
    <Grid sx={mainBox}>
      <Grid sx={listMain}>
        <Grid sx={{ marginLeft: "1.5rem", marginTop: "6rem" }}>
         <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",marginRight:"1.2rem"}}> <Typography sx={inviteFreind}>Invite Freinds!</Typography><ContentCopyIcon sx={{color:"white",fontSize:"20px",opacity:".8"}}/></Box>
          <Typography sx={inviteFreindsub}>
            You and your friend will receive bonuses
          </Typography>
        </Grid>

        <Grid
          container
          justifyContent="center"
          lg={12}
          sx={{ marginBottom: "1rem", marginTop: "4rem" }}
        >
          <Card2
            image={bag}
            text="Invite a friend"
            text2="+5,000 for you ad your friend"
          />
          <Card2
            image={bag}
            text="Invite a friend"
            text2="+5,000 for you ad your friend"
          />
          <Typography sx={morebonus}>More Bonuses</Typography>
        </Grid>
        <Grid>
          <Box sx={listfreind}>
            <Typography sx={inviteFreind}>List of your friends(6)</Typography>{" "}
            <FlipCameraAndroidIcon
              sx={{ color: "white", opacity: ".7", width: "19px" }}
            />
          </Box>
          <Grid container
          justifyContent="center"
          lg={12}
          sx={{ marginBottom: "1rem", marginTop: "1rem" }}>
          <Card
          image={profile}
          image1={dollarCoin}
          text="Vipul Sharma"
          text2="Silver"
          text3="+5,000 (5.1k)"
          coin="+443.564K"
        />
        <Card
          image={profile}
          image1={dollarCoin}
          text="Vipul Sharma"
          text2="Silver"
          text3="+5,000 (5.1k)"
          coin="+443.564K"
        />
        <Card
          image={profile}
          image1={dollarCoin}
          text="Vipul Sharma"
          text2="Silver"
          text3="+5,000 (5.1k)"
          coin="+443.564K"
        />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const inviteFreind = {
  fontFamily: "Open Sans Hebrew",
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "32.68px",
  letterSpacing: "-0.02em",
  color: "#FFFFFF",
};
const morebonus = {
  fontFamily: "Open Sans Hebrew",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "16.34px",
  letterSpacing: "-0.02em",
  color: "#C9C9C9",
  textAlign: "center",
  textDecoration: "underline",
  marginTop: "-.5rem",
};
const inviteFreindsub = {
  fontFamily: "Open Sans Hebrew",
  fontSize: "12px",
  fontWeight: 300,
  lineHeight: "16.34px",
  letterSpacing: "-0.02em",
  color: "#C9C9C9",
};

const listfreind = {
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "1.5rem",
  marginRight: "1rem",
  alignItems: "center",
};

const mainBox = {
  width: "100%",
  height: "100%",
  /* background-color: black; */
  background:
    "linear-gradient(to bottom, #000000 22%, #1f344c 50%, #000000 90%)",
};
const subHeading = {
  fontFamily: "Open Sans Hebrew",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "16.34px",
  letterSpacing: "-0.02em",
  textAlign: "left",
  color: "#ffffff",
};

const listMain = {
  height: "90%",
  overflow: "scroll",
  paddingBottom: "2.5rem",
  '&::-webkit-scrollbar': {
    display: 'none',
  },
};
