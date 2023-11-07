import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import Friday from './timetable_days_EN/FridayEN'
import Saturday from './timetable_days_EN/SaturdayEN'
import Sunday from './timetable_days_EN/SundayEN'

import lut from '../../assets/images/lut_sign.jpg'
import palju from '../../assets/images/palju.jpg'
import kreba from  '../../assets/images/kreba.jpg'
import '../../assets/styles/Schedule.css'


function Schedule() {

  return (
    <Box sx={{ flexGrow: 1 }} className="content-wrapper" >
      <Grid container className="timetable" >
          <Grid xs={12} md={4} className="timetable-image">
              <img src={lut} alt="Sign of LUT" className="timetable-image-1" />
          </Grid>
          <Grid xs={12} md={8} className="timetable-grid" backgroundColor="white">
              <Friday />
          </Grid>
      </Grid>
        <Grid container className="timetable" rowSpacing={0}>
          <Grid xs={12} md={4} className="timetable-image">
            <img src={kreba} alt="Big Kreba" className="timetable-image-1" />
        </Grid>
        <Grid xs={12} md={8} className="timetable-grid">
            <Saturday />
        </Grid>
      </Grid>
      <Grid container className="timetable" rowSpacing={0}>
          <Grid xs={12} md={4} className="timetable-image">
              <img src={palju} alt="Sillis hot tub" className="timetable-image-1" />
          </Grid>
          <Grid xs={12} md={8} className="timetable-grid" backgroundColor="white">
              <Sunday />
          </Grid>
      </Grid>
    </Box>
)}

export default Schedule;