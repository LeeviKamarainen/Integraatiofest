import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import '../assets/styles/Accommodation.css'
import { Typography } from '@mui/material';

import map from '../assets/images/map.png'
import '../assets/styles/Map.css'

function Accommodation() {

  return (
    <Box sx={{ flexGrow: 1 }} className="content-wrapper" >
      <Grid container className="timetable" >
          <Grid xs={12} md={12} className="" direction="column">
              <Typography sx={{ typography: {xs: 'h5', sm: 'h4', md:'h3', lg: 'h2'}}} className="map-title"> Kartta </Typography>
          </Grid>
      </Grid>
        <Grid container className="timetable" rowSpacing={0}>
          <Grid xs={12} md={12} className="timetable-grid">
            <img src={map} className="map" alt="kartta" />
        </Grid>
      </Grid>
    </Box>
)}

export default Accommodation;