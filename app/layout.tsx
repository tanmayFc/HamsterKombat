"use-client"
import type { ReactNode } from "react";
import { theme } from "../theme";

import "./styles/globals.css";
import { ThemeProvider } from "@mui/material";

interface Props {
  readonly children: ReactNode;
}

export const metadata = {
  title: 'Web3Modal',
  description: 'Web3Modal Example'
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
              {children}
            </body>
        </html>
      </ThemeProvider>
  );
}
