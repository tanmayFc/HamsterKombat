'use client'
import React from "react";
import Bottombar from "./component/bottombar";
import Headerbar from "./component/headerbar";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useStore } from "@/lib/store/userStore";
const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const token = useStore((state: { token: any }) => state.token);
  const router=useRouter()
  if(token===""){
    router.push('/')
  }
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
