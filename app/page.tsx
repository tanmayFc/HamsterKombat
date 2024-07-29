"use-client"
import type { Metadata } from "next";
import { Grid,
         Typography,      
 } from "@mui/material";
// import App from "./components/dashboard/page";
import goat from "../app/assets/images/goat.png"
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function IndexPage() {
  const outerContainer = {
    width: '100%',
    height: '100%',
    position: 'relative',
  };

  const innerContainer = {
    xs:{
      width:'100%'
    },
    height: '100%',
    background: 'radial-gradient(#1f344c, black)',
    position: 'relative',
    display:'flex',
    justifyContent:'center',
    alignItems:'flexEnd'
  };

  const goatImage = {
    position: 'absolute',
    bottom:100,
    width: '300px',
    height: '550px',
    backgroundImage: `url(${goat.src})`,
    backgroundRepeat: 'no-repeat',
    zIndex: 2, // Adjust z-index as needed
  };

  const goatbottom = {
    position: 'absolute',
    bottom:0,
    width: '100%',
    height: '300px',
    background: 'linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,1) 100%)',
    zIndex: 2,
  };

  const textParent = {
    position: 'absolute',
    bottom:60,
    height:'fit-content',
    zIndex:3
  }

  const textParent1 = {
    width: '100%',
    height:'fit-content',
    paddingBottom:'17px',
    borderBottom: '1px solid white',
    borderImage: 'linear-gradient(to right, black 20%, white, black 80%) 1'
  }

  const textParent2 = {
    width: '100%',
    height:'fit-content',
    paddingBottom:'20px',
    marginTop:'17px'
  }

  const iconContainer = {

  }

  return (
    <>
      <Grid container sx={outerContainer} justifyContent="center" alignItems="center" direction="column">
        <Grid item container sx={innerContainer}>
          <Grid item sx={goatImage} />
          <Grid item sx={goatbottom} />
          <Grid item container direction="column" sx={textParent}>
            <Grid item container sx={textParent1} direction="column" alignItems="center" gap="7px">
              <Grid item>
                <Typography variant="h5">GOAT TRADER TOKEN</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h2">will be launched</Typography>
              </Grid>
            </Grid>
            <Grid item container sx={textParent2} direction="column" alignItems="center" gap="7px">
              <Grid item>
                <Typography variant="h3">Stay tuned</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4">More info in official channels</Typography>
              </Grid>
              <Grid item container sx={iconContainer} justifyContent="center" gap={3}>
                <Grid item>
                  <Typography variant="h6"> <XIcon/> </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6"> <InstagramIcon/> </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6"> <TelegramIcon/> </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
