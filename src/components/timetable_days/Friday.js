import React from 'react'
import { Typography } from '@mui/material'

import '../../assets/styles/Schedule.css'

function Friday() {
  return (
    <>
        <Typography sx={{ typography: { xs: 'h6', md: 'h2'}, fontWeight: "bold"}} component="h2" textAlign="left" className="timetable-title"> Perjantai </Typography>
        <p className="timetable-text">
          <span className="timetable-item">10:00 - 12:00 <span className="location">Ylioppilastalo:</span> Passien jako & lounas <br /></span>
          <span className="timetable-item">12:00 - 12:45 <span className="location">Viipuri-sali:</span> Alkuseremonia, Tekniikan akateemiset ja Lappeenrannan kaupunki <br /></span>
          <span className="timetable-item">12:45 - 13:15 <span className="location">Viipuri-sali:</span> CSC <br /></span>
          <span className="timetable-item">13:15 - 13:45 <span className="location">Viipuri-sali:</span> Lassi <br /></span>
          <span className="timetable-item">14:00 - 17:00 Excut <br /></span>
          <span className="indent">Visma, Upm, Tuju, Syncron Tech <br /></span>
          <span className="timetable-item">17:00 - 19:00 Aikaa käydä majoituksessa <br /></span>
          <span className="timetable-item">19:00 - 23:00 <span className="location">Ylioppilastalo</span> / <span className="location">Rakuunamäki:</span> Sitsit <br /></span>
          <span className="timetable-item">00:00 - 04:00 <span className="location">Las Palmas (Keskusta):</span> Jatkot </span>
        </p>
    </>
  )
}

export default Friday