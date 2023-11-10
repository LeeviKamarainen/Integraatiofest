import React from 'react'
import { Typography } from '@mui/material'

import '../../assets/styles/Schedule.css'

function Friday() {
  return (
    <>
        <Typography sx={{ typography: { xs: 'h6', md: 'h2'}, fontWeight: "bold"}} component="h2" textAlign="left" className="timetable-title"> Perjantai </Typography>
        <p className="timetable-text">
          <span className="timetable-item">10:00 - 12:00 <span className="location">Ylioppilastalon kellari:</span> Passien jako <br /></span>
          <span className="timetable-item">12:00 - 12:45 <span className="location">Viipuri-sali:</span> Alkusanat, Tekniikan akateemiset <br /></span>
          <span className="timetable-item">12:45 - 13:15 <span className="location">Viipuri-sali:</span> Olli Mukkula -  Quantum computing for finance<br /></span>
          <span className="timetable-item">13:15 - 13:45 <span className="location">Viipuri-sali:</span> Lassi Lehtisyrjä - Solid state superconducting cryogenic coolers <br /></span>
          <span className="timetable-item">14:00 - 17:00 Excut (tarkista oman excun aloitusajankohta excut-sivulta) <br /></span>
          <span className="timetable-item">17:00 - 18:30 Majoitus avoinna <br /></span>
          <span className="timetable-item">19:00 - 00:00 <span className="location">Ylioppilastalo</span> / <span className="location">Rakuunamäki:</span> Sitsit <br /></span>
          <span className="timetable-item">00:00 - 04:00 <span className="location">Las Palmas (Keskusta):</span> Jatkot </span>
        </p>
    </>
  )
}

export default Friday