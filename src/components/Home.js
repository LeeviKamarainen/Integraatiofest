import React from 'react'
import { Typography, Button, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Spotify } from 'react-bootstrap-icons';
import { Youtube } from 'react-bootstrap-icons';
import { Telegram } from 'react-bootstrap-icons';

import LeftNav from './LeftNav';

import ReactPlayer from 'react-player/lazy';

import triangleMan from '../assets/videos/triangleMan_orig.mp4'

import '../assets/styles/Home.css';


function Home() {

    return (
      <Box sx={{ flexGrow: 2 }} className="content-wrapper home" >
        <LeftNav />
        <Typography sx={{ typography: {xs: 'h5', sm: 'h3', md: 'h2', lg: 'h2', xl: 'h1'}}} className="home-text main-title"> Integraatiofest 2023 </Typography>
        <ReactPlayer url={triangleMan} playing={true} loop={true} muted={true} width="100%" height="100%" className="home-video" />
        <Typography sx={{ typography: {xs: 'h6', sm: 'h5', md:'h4', lg: 'h4'}}} className="home-text secondary-title"> Like never before </Typography>
      </Box>
  )}
  
  export default Home;