import Box from '@mui/material/Box';
import React from 'react'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <Box sx={{display:'flex', gap:'30px', width:'100%', height:'100vh', justifyContent:'center', alignItems:'center'}}>
    <Outlet/>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/IMG_GradLogo_Black_RGB.png/640px-IMG_GradLogo_Black_RGB.png" alt="logo" width={300}/>    
    </Box>
  )
}

export default Layout