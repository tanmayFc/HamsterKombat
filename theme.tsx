import { createTheme } from "@mui/material";
import { Overpass } from "next/font/google";

const overpass = Overpass({ subsets: ["latin"] });

export const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
        light: "#f5f4fe",
      },
      secondary: {
        main: "#040616",
        light: "#8697B4",
      },
      success: {
        main: "#196C6C",
      },
      info: {
        main: "#AEB8B8",
        light: "#F5F4FF",
      },
    },
    typography: {
      subtitle1: {
        fontFamily: overpass.style.fontFamily,
        fontWeightRegular: 600,
        fontSize: 28,
      },
      body1: {
        fontFamily: overpass.style.fontFamily,
        fontWeightRegular: 600,
        fontSize: 14,
      },
      body2: {
        fontFamily: overpass.style.fontFamily,
        color: "secondary.main",
        fontWeightRegular: 600,
        fontSize: 15,
      },
    },
    breakpoints: {},
    
  });