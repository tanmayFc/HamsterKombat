import { Box, Typography } from "@mui/material";

const EnergyBoost = (props: any) => {
    return (
      <Box sx={outerBox}>
        <Box sx={imageStyle(props.image.src)} />
        <Typography sx={name}>{props.name}</Typography>
      </Box>
    );
  };
  
  export default EnergyBoost;
  const imageStyle = (image: any) => ({
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    overflow: "hidden",
  });
  
  const outerBox = {
    width: "100px",
    height: "40px",
    backgroundColor: "transpernt",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: ".3rem",
  };
  
  const name = {
    fontFamily: "Open Sans Hebrew",
    fontSize: "17px",
    fontWeight: 550,
    lineHeight: "23.15px",
    letterSpacing: "-0.02em",
    textAlign: "center",
    color:"#FFFFFF"
  };
  