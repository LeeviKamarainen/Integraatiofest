import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import Friday from './timetable_days/Friday'
import Saturday from './timetable_days/Saturday'
import Sunday from './timetable_days/Sunday'

import lut from '../assets/images/lut_sign2.png'
import palju from '../assets/images/palju.png'
import kreba from  '../assets/images/kreba.png'
import '../assets/styles/Schedule.css'


function Schedule() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container className="timetable" >
          <Grid xs={6} md={4} className="timetable-image">
              <img src={lut} alt="Norppa" className="timetable-image-1" />
          </Grid>
          <Grid xs={6} md={8} className="timetable-grid" backgroundColor="white">
              <Friday />
          </Grid>
      </Grid>
        <Grid container className="timetable" rowSpacing={0}>
          <Grid xs={6} md={8} className="timetable-grid">
            <Saturday />
        </Grid>
        <Grid xs={6} md={4} className="timetable-image">
          <img src={kreba} alt="Norppa" className="timetable-image-1" />
        </Grid>
      </Grid>
      <Grid container className="timetable" rowSpacing={0}>
          <Grid xs={6} md={4} className="timetable-image">
              <img src={palju} alt="Norppa" className="timetable-image-1" />
          </Grid>
          <Grid xs={6} md={8} className="timetable-grid" backgroundColor="white">
              <Sunday />
          </Grid>
      </Grid>
    </Box>
)}

export default Schedule