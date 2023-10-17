import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import Perjantai from './timetable_days/Perjantai'
import Lauantai from './timetable_days/Lauantai'
import Sunnuntai from './timetable_days/Sunnuntai'

import logo from '../assets/images/taustakuva.png'
import '../assets/styles/TimeTable.css'


function Timetable() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container className="timetable" >
          <Grid xs={6} md={4} className="timetable-image">
              <img src={logo} alt="Norppa" className="timetable-image-1" />
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
          <img src='https://images.unsplash.com/photo-1502657877623-f66bf489d236' alt="Norppa" className="timetable-image-2" />
        </Grid>
      </Grid>
      <Grid container className="timetable" rowSpacing={0}>
          <Grid xs={6} md={4} className="timetable-image">
              <img src={logo} alt="Norppa" className="timetable-image-1" />
          </Grid>
          <Grid xs={6} md={8} className="timetable-grid" backgroundColor="white">
              <Sunnuntai />
          </Grid>
      </Grid>
    </Box>
)}

export default Timetable