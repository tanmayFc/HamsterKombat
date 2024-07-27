"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { useStore } from "../../../lib/store/userStore";
import { Box, Grid, Typography } from "@mui/material";
import { Height } from "@mui/icons-material";
import image from "../assets/icon/earnmorecoin.png";
import doloricon from "../assets/image/dolor_background.png";
import { dollarCoin } from "../../assets/images/index";
import goat from "../assets/image/goat.png";
import youtube from "../assets/icon/youtube.png";
import dailyTask from "../assets/icon/dailyreward.png";
import Card from "./components/card";

export default function App() {
  return (
    <Grid sx={mainBox}>
    <Grid sx={listMain}>
      <Grid container lg={12} sx={earnImage}>
        <Box sx={mainImage} />
        <Typography sx={earnMore}>Earn More Coins</Typography>
      </Grid>
        

      <Grid container justifyContent="center" lg={12} sx={{marginBottom:"1rem"}}>
        <Grid container lg={12} justifyContent="start" sx={{marginLeft:"1.2rem"}}>
          <Typography sx={subHeading}>Goad Youtube</Typography>
        </Grid>
        <Card
          image={youtube}
          image1={dollarCoin}
          text="Crypto & Grid index hits lowest level since ....."
          coin="+443.564K"
        />
        <Card
          image={youtube}
          image1={dollarCoin}
          text="Crypto & Grid index hits lowest level since ....."
          coin="+443.564K"
        />
      </Grid>
      <Grid container justifyContent="center" lg={12} sx={{marginBottom:"1rem"}}>
        <Grid container lg={12} justifyContent="start" sx={{marginLeft:"1.2rem"}}>
          <Typography sx={subHeading}>Daily Tasks</Typography>
        </Grid>
        <Card
          image={dailyTask}
          image1={dollarCoin}
          text="Crypto & Grid index hits lowest level since ....."
          coin="+443.564K"
          task={true}
        />
        <Card
          image={dailyTask}
          image1={dollarCoin}
          text="Crypto & Grid index hits lowest level since ....."
          coin="+443.564K"
          task={true}
        />
      </Grid>

      <Grid container justifyContent="center" lg={12} sx={{marginBottom:"1rem"}}>
        <Grid container lg={12} justifyContent="start" sx={{marginLeft:"1.2rem"}}>
          <Typography sx={subHeading}>Goad Youtube</Typography>
        </Grid>
        <Card
          image={youtube}
          image1={dollarCoin}
          text="Crypto & Grid index hits lowest level since ....."
          coin="+443.564K"
        />
        <Card
          image={youtube}
          image1={dollarCoin}
          text="Crypto & Grid index hits lowest level since ....."
          coin="+443.564K"
        />
      </Grid>
    </Grid>
      </Grid>
  );
}

const mainImage = {
  backgroundImage: `url(${image.src})`,
  backgroundSize: "contain",
  width: "236px",
  height: "236px",
  overflow: "hidden",
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
    height:"95vh",
    overflow:"scroll",
    paddingBottom:"2.5rem"
}
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
