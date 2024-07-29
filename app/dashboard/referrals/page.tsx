"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import image from "../assets/icon/earnmorecoin.png";
import doloricon from "../assets/image/dolor_background.png";
import { dollarCoin } from "../../assets/images/index";
import youtube from "../assets/icon/youtube.png";
import dailyTask from "../assets/icon/dailyreward.png";
import Card from "./components/card";
import bag from "../assets/icon/moneybag.png";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import Card2 from "./components/card2";
import profile from "../assets/icon/profileicon.png";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import zIndex from "@mui/material/styles/zIndex";


export default function App() {
  return (
    <Grid sx={mainBox}>
      <Grid sx={listMain}>
        <Grid sx={{ marginLeft: "1.5rem", marginTop: "6rem" }}>
          <Typography sx={inviteFreind}>Invite Freinds!</Typography>
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
          <Grid>
            <Box sx={copyBox}>
              
            <Typography sx={copy}>Invite Freinds <ContentCopyIcon/></Typography>
            </Box>
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
const copy = {
  fontFamily: "Open Sans Hebrew",
  fontSize: "12px",
  fontWeight: 700,
  lineHeight: "16.34px",
  letterSpacing: "-0.02em",
  color: "#458BEB",
  textAlign:"center",
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
};
const copyBox={
    width: "91vw",
    height: "6vh",
    display: "flex",
    borderRadius: "4px",
    justifyContent:"center",
    marginLeft:"1.1rem",
    backgroundColor:"#323335",
    border:"1px solid #458beb",
    position:"fixed",
    bottom:"8rem",
    zIndex:"5"
}
const listfreind = {
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "1.5rem",
  marginRight: "1rem",
  alignItems: "center",
};
const earnImage = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  height: "350px",
  alignItems: "center",
  backgroundImage: `url(${doloricon.src})`,
  backgroundSize: "contain",
  overflow: "hidden",
};
const earnMore = {
  color: "#ffffff",
  fontFamily: "Open Sans Hebrew",
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "32.68px",
  letterSpacing: "-0.02em",
  marginLeft: "10px",
  marginTop: "5px",
};
const mainBox = {
  width: "100vw",
  height: "100vh",
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
  height: "80vh",
  overflow: "scroll",
  paddingBottom: "2.5rem",
};
const equitybox = (color: any) => ({
  backgroundColor: "#222222",
  width: "151px",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
  borderRadius: "4px",
  border: `.0001px solid ${color}`,
});

const colorBorder = (color: any) => ({
  position: "absolute",
  bottom: "-3px",
  height: "50px",
  width: "70px",
  borderBottom: `3px solid ${color}`,
  borderRadius: "2px",
});

const typographyequity = {
  color: "#458BEB",
  fontSize: "12px",
  marginTop: "1px",
};

const typographyProfit = {
  display: "flex",
  alignItems: "center",
  gap: ".3rem",
  color: "#ffffff",
  fontSize: "12px",
};

const innercircleCharacter = {
  width: "200px",
  height: "200px",
  padding: "1rem",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "radial-gradient(circle,#2c63ae,#1f344c)",
  overflow: "hidden",
};

const outercircleCharacter = {
  width: "224px",
  height: "224px",
  borderRadius: "50%",
  cursor: "pointer",
  backgroundColor: "#426eab",
  display: "grid",
  placeItems: "center",
};
