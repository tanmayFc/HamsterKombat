import { Box, Typography } from "@mui/material";
import React from "react";

const card = (props: any) => {
  return (
    <Box sx={outerBox}>
      <Box sx={imageStyle(props.image.src)} />
      <Typography sx={name}>{props.name}</Typography>
    </Box>
  );
};

export default card;
const imageStyle = (image: any) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  overflow: "hidden",
});

const outerBox = {
  width: "90px",
  height: "80px",
  borderRadius: "4px",
  border: "0.5px solid #808080",
  backgroundColor: "#222222",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: ".3rem",
};

const name = {
  fontFamily: "Open Sans Hebrew",
  fontSize: "12px",
  fontWeight: 500,
  lineHeight: "12px",
  letterSpacing: "-0.02em",
  textAlign: "center",
  color:"#FFFFFF"
};
