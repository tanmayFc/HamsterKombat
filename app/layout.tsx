import type { ReactNode } from "react";
import StoreProvider from "./StoreProvider";

import "./styles/globals.css";

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
    // <SessionProvider>
    
      <StoreProvider>
        <html lang="en">
            <body>
              {children}
            </body>
        </html>
      </StoreProvider>
    
    //  </SessionProvider> 
  );
}
