import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import '../assets/styles/Accommodation.css'
import { Typography } from '@mui/material';


function Accommodation() {

  return (
    <Box sx={{ flexGrow: 1 }} className="content-wrapper" >
      <Grid container className="timetable" >
          <Grid xs={12} md={12} className="timetable-grid" backgroundColor="white">
              <Typography sx={{ typography: {xs: 'h5', sm: 'h4', md:'h3', lg: 'h2'}}} className=""> In English </Typography>
              <p></p>
          </Grid>
      </Grid>
        <Grid container className="timetable" rowSpacing={0}>
          <Grid xs={12} md={12} className="timetable-grid">
          <Typography sx={{ typography: {xs: 'h5', sm: 'h4', md:'h3', lg: 'h2'}}} className=""> Julkinen liikenne </Typography>
              <p>Edelleen tärkeää infoa</p>
        </Grid>
      </Grid>
    </Box>
)}

export default Accommodation;