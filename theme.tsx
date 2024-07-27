"use client";
import { createTheme } from "@mui/material/styles";
import { Overpass } from "next/font/google";

const overpass = Overpass({ subsets: ["latin"] });

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f480e2",
      dark: "#f480e2",
    },
    secondary: {
      main: "#fff",
      light: "#fff",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#fff",
      secondary: "#B0BEC5",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 460,
      md: 460,
      lg: 460,
      xl: 460,
    },
  },
  typography: {
    fontFamily: overpass.style.fontFamily,
    h1: {
      fontStyle: "normal",
      fontWeight: 900,
      fontSize: "24px",
      lineHeight: "100%",
      color: "#FFFFFF",
    },
    h2: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "100%",
      color: "#FFFFFF",
    },
    h3: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "100%",
      color: "#FFFFFF",
    },
    h4: {
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "100%",
      color: "#FFFFFF",
    },
    h5: {
      fontStyle: "normal",
      fontWeight: 900,
      fontSize: "26px",
      //?updated 24px
      lineHeight: "100%",
      color: "#FFFFFF",
    },
    h6: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "30px",
      lineHeight: "100%",
      color: "#FFFFFF",
    },
    body1: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "1.000rem",
      //? 16px updated
      lineHeight: "150%",
      color: "#24282B",
    },
    body2: {
      //? updated
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "0.875rem",
      // 14px
      lineHeight: "normal",
      // fontFamily: "Inter",
      color: "#24282B",
    },
    subtitle1: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "0.625rem",
      // 10px
      color: "#24282B",
      lineHeight: "120%",
    },
    subtitle2: {},

  },
});



export default theme;
