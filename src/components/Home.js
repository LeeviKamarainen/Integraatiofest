import React from 'react'
import { Typography, Box } from '@mui/material';

import homeIntro from '../assets/videos/homeIntro.mp4'

import '../assets/styles/Home.css';


function Home() {

    return (
      <Box sx={{ flexGrow: 2 }} className="content-wrapper home" >
        {/* <LeftNav /> */}
        <Typography sx={{ typography: {xs: 'h4', sm: 'h3', md: 'h2', lg: 'h2', xl: 'h1'}}} className="home-text main-title"> Integraatiofest 2023 </Typography>
        <video loop autoPlay muted playsInline width="100%" height="100%" className="home-video">
          <source src={homeIntro} type="video/mp4" />
        </video>
        <Typography sx={{ typography: {xs: 'h5', sm: 'h5', md:'h4', lg: 'h4'}}} className="home-text secondary-title"> Like never before </Typography>
      </Box>
  )}
  
  export default Home;