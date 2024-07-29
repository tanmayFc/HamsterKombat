import { Box, Typography } from "@mui/material";
import React from "react";

const Headerbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        marginTop: "1.5rem",
        position: "absolute",
        width: "100%",
      }}
    >
      <Typography sx={heading}>GOAT TRADER</Typography>
    </Box>
  );
};

const heading = {
  fontFamily: "Overpass",
  fontSize: "18px",
  fontWeight: 500,
  lineHeight: "22.79px",
  letterSpacing: "-0.02em",
  color: "#ffffff" ,
};
export default Headerbar;
