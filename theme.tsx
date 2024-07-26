// import { createTheme } from "@mui/material";
// import { Overpass } from "next/font/google";

// const overpass = Overpass({ subsets: ["latin"] });

// export const theme = createTheme({
//     palette: {
//       primary: {
//         main: "#FFFFFF",
//         light: "#f5f4fe",
//       },
//       secondary: {
//         main: "#040616",
//         light: "#8697B4",
//       },
//       success: {
//         main: "#196C6C",
//       },
//       info: {
//         main: "#AEB8B8",
//         light: "#F5F4FF",
//       },
//     },
//     typography: {
//       subtitle1: {
//         fontFamily: overpass.style.fontFamily,
//         fontWeightRegular: 600,
//         fontSize: 28,
//       },
//       body1: {
//         fontFamily: overpass.style.fontFamily,
//         fontWeightRegular: 600,
//         fontSize: 14,
//       },
//       body2: {
//         fontFamily: overpass.style.fontFamily,
//         color: "secondary.main",
//         fontWeightRegular: 600,
//         fontSize: 15,
//       },
//     },
//     breakpoints: {},
    
//   });


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
      xs: 420,
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
      fontWeight: 400,
      fontSize: "1.5rem",
      //?updated 24px
      lineHeight: "120%",
      color: "#24282B",
    },
    h6: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "1.250rem",
      // 20px
      lineHeight: "120%",
      color: "#24282B",
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
