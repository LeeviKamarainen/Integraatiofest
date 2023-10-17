import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import Perjantai from './timetable_days/Perjantai'
import Lauantai from './timetable_days/Lauantai'
import Sunnuntai from './timetable_days/Sunnuntai'

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
              <Perjantai />
          </Grid>
      </Grid>
        <Grid container className="timetable" rowSpacing={0}>
          <Grid xs={6} md={8} className="timetable-grid">
            <Lauantai />
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
              <Sunnuntai />
          </Grid>
      </Grid>
    </Box>
)}

export default Schedule