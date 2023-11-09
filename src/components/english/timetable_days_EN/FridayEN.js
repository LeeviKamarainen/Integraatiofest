import React from 'react'
import { Typography } from '@mui/material'

import '../../../assets/styles/Schedule.css'

function Friday() {
  return (
    <>
        <Typography sx={{ typography: { xs: 'h6', md: 'h2'}, fontWeight: "bold"}} component="h2" textAlign="left" className="timetable-title"> Friday </Typography>
        <p className="timetable-text">
          <span className="timetable-item">10:00 - 12:00 <span className="location">Student union building basement:</span> Distribution of fest passes <br /></span>
          <span className="timetable-item">12:00 - 12:45 <span className="location">Viipuri Hall:</span> Opening words, Tekniikan akateemiset <br /></span>
          <span className="timetable-item">12:45 - 13:15 <span className="location">Viipuri Hall:</span> Olli Mukkula -  Quantum computing for finance<br /></span>
          <span className="timetable-item">13:15 - 13:45 <span className="location">Viipuri Hall:</span> Lassi Lehtisyrjä - Solid state superconducting cryogenic coolers <br /></span>
          <span className="timetable-item">14:00 - 17:00 Excursions (check the start time for your specific excursion on the excursions page) <br /></span>
          <span className="timetable-item">17:00 - 19:00 Accommodation open <br /></span>
          <span className="timetable-item">19:00 - 00:00 <span className="location">Student union building basement</span> / <span className="location">Rakuunamäki:</span> Sitz party <br /></span>
          <span className="timetable-item">00:00 - 04:00 <span className="location">Las Palmas (City center):</span> Afterparty </span>
        </p>
    </>
  )
}

export default Friday