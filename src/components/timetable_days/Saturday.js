import React from 'react'
import { Typography } from '@mui/material'

import '../../assets/styles/Schedule.css'

function Saturday() {
  return (
    <>
        <Typography sx={{ typography: { xs: 'h6', md: 'h3'}}} component="h2" textAlign="left" className="timetable-title"> Lauantai </Typography>
        <ul className="timetable-text">
            <span className="timetable-item">09:00 - 10:00 Luento <br /></span>
            <span className="timetable-item">12:00 - 14:00 Posterisessio ja haalarimerkkitori @ ? <br /></span>
            <span className="timetable-item">14:00 - 16:00 SFMO, PLANCS, IMC skabat <br /></span>
            <span className="timetable-item">16:00 - 21:00 Kreisiohjelma  <br /></span>
            <span className="timetable-item">21:00 - 23:00 Aalef <br /></span>
            <span className="timetable-item">23:00 - 00:00 LateDuo keikka @ Ylioppilastalo <br /></span>
            <span className="timetable-item">00:00 - <span className="jatkot" >undefined</span> Jatkot @ Kellari</span>
        </ul>
    </>
  )
}

export default Saturday