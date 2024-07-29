import { Box, Typography } from "@mui/material";
import React from "react";
import { dollarCoin } from "@/app/assets/images";

const Card2 = (props: any) => {
  return (
    <Box sx={outerbox}>
      <Box sx={bag(props.image.src)} />
      <Box sx={innerbox}>
        <Typography sx={firstText}>{props.text}</Typography>
        <Typography sx={secondText}>
          <Box sx={dollar} />
          {props.text2}
        </Typography>
      </Box>
    </Box>
  );
};

const firstText = {
  fontFamily: "Open Sans Hebrew",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "16.34px",
  letterSpacing: "-0.02em",
  color: "#C9C9C9",
};
const secondText = {
  fontFamily: "Open Sans Hebrew",
  fontSize: "12px",
  fontWeight: 700,
  lineHeight: "16.34px",
  letterSpacing: "-0.02em",
  color: "#ffffff",
  display:"flex",
  alignItem:"center",
  gap:".3rem",
  marginTop:"5px",
  justifyContent:"start"
};
const dollar = {
  backgroundImage: `url(${dollarCoin.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "20px",
  height: "18px",
  overflow: "hidden",
};
const outerbox = {
  width: "90%",
  height: "7vh",
  position: "relative",
  display: "flex",
  justifyContent: "end",
  backgroundColor: "#3A3D41",
  marginBottom:"1.8rem",
  borderRadius:"4px"
};
const innerbox = {
  width: "83%",
  height: "7vh",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center"
}
const bag = (image: any) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "absolute",
  top: "-30px",
  borderRadius: "50%",
  width: "70px",
  height: "70px",
  overflow: "hidden",
  left: "0rem",
  zIndex: "1",
});

export default Card2;
