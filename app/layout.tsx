"use-client"
import type { ReactNode } from "react";
import { theme } from "../theme";
import { Container, Box } from "@mui/material";

import "./styles/globals.css";
import { ThemeProvider } from "@mui/material";

interface Props {
  readonly children: ReactNode;
}

export const metadata = {
  title: 'Web3Modal',
  description: 'Web3Modal Example'
}

const wrap = {
  width:{
    md:'450px',
    sm:'100dvw',
  },
  height:'100dvh',
  padding:'0px',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      
        <html lang="en">
            <body>
            <Container sx={wrap}>
              {children}
            </Container>
            </body>
        </html>
      
    </ThemeProvider>
  );
}
