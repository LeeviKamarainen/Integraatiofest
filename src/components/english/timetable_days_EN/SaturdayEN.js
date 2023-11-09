import React from 'react'
import { Typography } from '@mui/material'

import '../../../assets/styles/Schedule.css'

function Saturday() {
  return (
    <>
        <Typography sx={{ typography: { xs: 'h6', md: 'h2'}}} component="h2" textAlign="left" className="timetable-title"> Saturday </Typography>
        <p className="timetable-text">
            <span className="timetable-item">08:30 - 10:00 <span className="location">Student union building basement:</span> Breakfast by VIBA <br /></span>
            <span className="timetable-item">10:00 - 10:45 <span className="location">Viipuri Hall:</span> Otto "Indiana Jones" Salmela - Kadonneen approksimaation metsästys <br /></span>
            <span className="timetable-item">10:45 - 11:30 <span className="location">Viipuri Hall:</span> Henning Kirschemann - CERN research in Finland <br /></span>
            <span className="timetable-item">12:00 - 14:00 <span className="location">University lobby:</span> Poster session and overall badge market <br /> </span> 
            <span className="timetable-item">12:00 - 12:45 <span className="location">Viipuri Hall:</span> Jesse Railo - Miten tomografiaa voidaan tutkia geometrian avulla <br /></span>
            <span className="timetable-item">13:00 - 14:00 <span className="location">Viipuri Hall:</span> Heikki Kälviäinen - Computer vision applications and challenges of machine learning <br /></span>
            <span className="timetable-item">14:00 - 14:45 <span className="location">Viipuri Hall:</span> Teemu Härkönen - Stokastiset prosessit, spektroskopia ja bayesiläiset neuroverkot <br /></span>
            <span className="timetable-item">14:00 - 16:00 <span className="location">1316:</span> SFMO general meeting <br /></span>
            <span className="timetable-item indent"><span className="location">3305 / 3306:</span> PLANCKS ja IMC qualifiers <br /></span> 
            <span className="timetable-item">15:00 - 17:00 Accommodation open <br /></span>
            <span className="timetable-item">17:00 - 21:00 <span className="location"> Campus area:</span> <b>Appro</b>Ξmaatio e<sup>it</sup>, t ∈ [0, 2π]  <br /></span>
            <span className="timetable-item">21:00 - 00:00 <span className="location"> Student union building:</span> Afterparty and LaTe-Duo<br /></span>
            <span className="timetable-item">00:00 - <span className="jatkot">undefined</span> <span className="location">Student union building basement: </span> Afterparties afterparty</span>
        </p>
    </>
  )
}

export default Saturday