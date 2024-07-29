"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import image from "../assets/icon/earnmorecoin.png";
import doloricon from "../assets/image/dolor_background.png";
import { dollarCoin } from "../../assets/images/index";
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
    height:"87.3%",
    overflow:"scroll",
    '&::-webkit-scrollbar': {
  display: 'none',
},
    paddingBottom:"2.5rem"
}
