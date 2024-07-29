import { BorderRight, Key } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";

import React from "react";

const card = (props: any) => {
  return (
    <Box sx={mainUpper}>
      <Box sx={upperImage(props.image.src,props.task)} />
      <Box sx={rightImage(props.image1.src)} />
      <Box sx={mainBox}>
        <Box sx={inner1}>
          <Typography sx={textStyle}>{props.text}</Typography>
        </Box>
        <Box sx={inner2}>
        <Typography sx={textStyle}>{props.coin}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default card;
const mainUpper = {
  width: "100%",
  height: "9vh",
  display: "flex",
  alignItems: "end",
  position: "relative",
  marginLeft:"1.5rem",
  marginRight:"1.5rem"
};
const mainBox = {
  width: "90%",
  height: "7vh",
  display: "flex",
  borderRadius: "4px",
};
const inner1 = {
  width: "86%",
  height: "7vh",
  borderRadius: "4px",
  background: "#5588BC66",
  border: "0.5px solid #458BEB",
  clipPath: "polygon(0% 0%, 81% 0%, 100% 100%, 0% 100%)",
  display:"flex",
  alignItems:"center",
  paddingRight:"2rem",
};
const inner2 = {
  width: "36%",
  height: "7vh",
  borderRadius: "4px",
  background: "#5588BC66",
  border: "0.5px solid #458BEB",
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 40% 100%)",
  position: "absolute",
  display:"flex",
  alignItems:"center",
  paddingRight:"2rem",
  paddingTop:"1rem",
  right: 0,
};
const upperImage = (image: any,task:any) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "absolute",
  top: !task?"-9px":"4px",
  borderRadius: "50%",
  width: !task?"65px":"50px",
  height: !task?"65px":"50px",
  overflow: "hidden",
  zIndex: "1",
});
const rightImage = (image: any) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "absolute",
  top: "-1px",
  right: "25px",
  borderRadius: "50%",
  width: "43px",
  height: "43px",
  overflow: "hidden",
  zIndex: "1",
});
const textStyle = {
  marginLeft: "55px", // Adjust this value to provide space for the image
  color: "#ffffff",
  fontFamily: "Open Sans Hebrew",
  fontSize: "12px",
  fontWeight: 600,
  lineHeight: "16.34px",
  letterSpacing: "-0.02em",
};

