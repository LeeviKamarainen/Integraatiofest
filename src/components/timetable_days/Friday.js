import React from 'react'
import { Typography } from '@mui/material'

import '../../assets/styles/Schedule.css'

function Friday() {
  return (
    <>
        <Typography sx={{ typography: { xs: 'h6', md: 'h2'}, fontWeight: "bold"}} component="h2" textAlign="left" className="timetable-title"> Perjantai </Typography>
        <ul className="timetable-text">
          <span className="timetable-item">10:00 - 13:00 Passien ja rannekkeiden jako @ Ylioppilastalon aula <br /></span>
          <span className="timetable-item">13:00 - 15:00 Luentoja <br /></span>
          <span className="timetable-item">15:00 - 17:00 Excut <br /></span>
          <span className="indent">Visma, Upm, Tuju, Syncron Tech <br /></span>
          <span className="timetable-item">18:00 - 19:00 Aikaa käydä majoituksessa <br /></span>
          <span className="timetable-item">19:00 - 23:00 Sitsit @ Kellari / Rakuunamäki <br /></span>
          <span className="timetable-item">00:00 - 04:00 Jatkot @ Las Palmas (Keskusta)</span>
        </ul>
    </>
  )
}

export default Friday