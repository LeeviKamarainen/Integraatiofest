import React from 'react'
import { Typography } from '@mui/material'

import '../../assets/styles/Schedule.css'

function Lauantai() {
  return (
    <>
        <Typography sx={{ typography: { xs: 'h6', md: 'h3'}}} component="h2" textAlign="left" className="timetable-title"> Lauantai </Typography>
        <p className="timetable-text">
            <span className="timetable-item">09:00 - 10:00 Luento <br /></span>
            <span className="timetable-item">12:00 - 14:00 Posterisessio ja haalarimerkkitori @ ? <br /></span>
            <span className="timetable-item">14:00 - 16:00 SFMO, PLANCS, IMC skabat <br /></span>
            <span className="timetable-item">16:00 - 21:00 Kreisiohjelma  <br /></span>
            <span className="timetable-item">21:00 - 23:00 Aalef <br /></span>
            <span className="timetable-item">23:00 - 00:00 LateDuo keikka @ Ylioppilastalo <br /></span>
            <span className="timetable-item">00:00 - xx:xx Jatkot @ Kellari</span>
        </p>
    </>
  )
}

export default Lauantai