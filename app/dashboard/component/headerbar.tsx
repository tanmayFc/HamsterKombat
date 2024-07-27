import { Box, Typography } from '@mui/material'
import React from 'react'

const Headerbar = () => {
  return (
    <Box sx={{display:"flex",justifyContent:"center",backgroundColor:"transparent",marginTop:"1.5rem",position:"absolute",width:"100vw"}}>
        <Typography variant ="h1" sx={{color:"#ffffff"}}>GOAT TRADER</Typography>
    </Box>
  )
}

export default Headerbar