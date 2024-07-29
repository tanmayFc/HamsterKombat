import React from "react";
import Bottombar from "./component/bottombar";
import Headerbar from "./component/headerbar";
import { Box } from "@mui/material";
const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div style={{ width: "100%", height: "100%"}}>
      <Box sx={{height:"100%",overflow:"hidden",display:"flex",justifyContent:"center"}}>
        <Headerbar />
        {children}
        <Bottombar />
      </Box>
    </div>
  );
};

export default layout;
