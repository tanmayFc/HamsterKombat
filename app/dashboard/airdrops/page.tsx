"use client";
import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import image from "../assets/image/dolor_background.png";

export default function App() {

  return (
    <Grid sx={mainBox}>
      <Box sx={{height:"90%",overflow:"scroll",'&::-webkit-scrollbar': {
  display: 'none',
},}}>
      </Box>
    </Grid>
  );
}

const innerbox = {
  backgroundImage: `url(${image.src})`,
  backgroundSize: "contain",
  // position: "absolute",
  // top: "10rem",
  width: "100%",
  height: "auto",
  minHeight:"45vh",
  overflow: "hidden",
};
const mainBox = {
  width: "100%",
  height: "100%",
  /* background-color: black; */
  background:
    "linear-gradient(to bottom, #000000 22%, #1f344c 50%, #000000 90%)",
};

