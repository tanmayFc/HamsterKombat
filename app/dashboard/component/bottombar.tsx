"use client";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import tradingIcon from "../assets/icon/tradingIcon.svg";
import instrumentIcon from "../assets/icon/instrumenticon.svg";
import referralIcon from "../assets/icon/referalsicon.svg";
import earnIcon from "../assets/icon/earnIcon.svg";
import airdropIcon from "../assets/icon/airdropicon.svg";
import { BorderBottom, WidthFull } from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";

const Bottombar = () => {
  const activeItem = usePathname();
  const router = useRouter();
  const handleRouting = (count: any) => {
    switch (count) {
      case 1:
        router.push("/dashboard/trading");
        break;
      case 2:
        router.push("/dashboard/instrument");
        break;
      case 3:
        router.push("/dashboard/referrals");
        break;
      case 4:
        router.push("/dashboard/earn");
        break;
      case 5:
        router.push("/dashboard/airdrops");
        break;
      default:
        router.push("/dashboard/trading");
        break;
    }
  };
  return (
    <Grid container justifyContent="center" lg={11} sx={outerbox}>
      <Grid container lg={12} sx={innerbox}>
        <Grid
          item
          lg={1.5}
          sx={iconBox(activeItem, "/dashboard/trading")}
          onClick={() => handleRouting(1)}
        >
          <Box
            sx={Image(tradingIcon.src, activeItem, "/dashboard/trading")}
          ></Box>{" "}
          <Typography sx={styletext}>Trading</Typography>
        </Grid>
        <Grid
          item
          lg={1.5}
          sx={iconBox(activeItem, "/dashboard/instrument")}
          onClick={() => handleRouting(2)}
        >
          <Box
            sx={Image(instrumentIcon.src, activeItem, "/dashboard/instrument")}
          ></Box>
          <Typography sx={styletext}>Instrument</Typography>
        </Grid>
        <Grid
          item
          lg={1.5}
          sx={iconBox(activeItem, "/dashboard/referrals")}
          onClick={() => handleRouting(3)}
        >
          <Box
            sx={Image(referralIcon.src, activeItem, "/dashboard/referrals")}
          ></Box>
          <Typography sx={styletext}>Referrals</Typography>
        </Grid>
        <Grid
          item
          lg={1.5}
          sx={iconBox(activeItem, "/dashboard/earn")}
          onClick={() => handleRouting(4)}
        >
          <Box sx={Image(earnIcon.src, activeItem, "/dashboard/earn")}></Box>
          <Typography sx={styletext}>Earn</Typography>
        </Grid>
        <Grid
          item
          lg={1.5}
          sx={iconBox(activeItem, "/dashboard/airdrops")}
          onClick={() => handleRouting(5)}
        >
          <Box
            sx={Image(airdropIcon.src, activeItem, "/dashboard/airdrops")}
          ></Box>
          <Typography sx={styletext}>Airdrop</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Image = (image: any, activeItem: any, item: any) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "50%",
  width: activeItem === item ? "40px" : "30px",
  height: activeItem === item ? "40px" : "30px",
  overflow: "hidden",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: activeItem === item ? "#458BEB" : "transparent",
    mixBlendMode: activeItem === item ? "color" : "normal",
    borderRadius: "50%",
  },
});
const styletext = {
  fontFamily: "Inter",
  fontSize: "10px",
  fontWeight: "500",
  lineHeight: "12.1px",
  color: "#F0F6FF",
};
const outerbox = {
  width: "100%",
  height: "8vh",
  position: "absolute",
  bottom: "1.5rem",
  // marginLeft: "14px",
  zIndex: "1",
};
const innerbox = {
  background: "linear-gradient(#000000 35%, #458BEB 94.02%)",
  width: "380px",
  height: "80px",
  gap: "1.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  clipPath: "polygon(6% 0%, 94% 0%, 100% 100%, 0% 100%)",
};

const iconBox = (activeItem: any, item: any) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: activeItem === item ? "1.2rem" : 0,
  borderBottom: activeItem === item ? "6px solid #DCAB38" : "none",
});

export default Bottombar;
