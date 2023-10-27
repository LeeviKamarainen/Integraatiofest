import React from 'react'
import { Typography } from '@mui/material'

import '../../assets/styles/Schedule.css'

function Saturday() {
  return (
    <>
        <Typography sx={{ typography: { xs: 'h6', md: 'h3'}}} component="h2" textAlign="left" className="timetable-title"> Lauantai </Typography>
        <p className="timetable-text">
            <span className="timetable-item">08:30 - 10:00 Aamupala <br /></span>
            <span className="timetable-item">10:00 - 10:45 <span className="location">Viipuri-sali:</span> Jesse Railo - Miten tomografiaa voidaan tutkia geometrian avulla <br /></span>
            <span className="timetable-item">10:45 - 11:30 <span className="location">Viipuri-sali:</span> Heikki Kälviäinen - Computer vision applications and challenges of machine learning <br /></span>
            <span className="timetable-item">12:00 - 14:00 <span className="location">5032:</span> Posterisessio <br /> </span>
            <span className="timetable-item indent"><span className="location">6789:</span> Haalarimerkkitori  <br /></span>
            <span className="timetable-item">14:00 - 14:45 <span className="location">Viipuri-sali:</span> Teemu Härkönen - Matriisilaskentaa <br /></span>
            <span className="timetable-item">14:00 - 16:00 <span className="location">8624:</span> SFMO:n syyskokous <br /></span>
            <span className="timetable-item indent"><span className="location">1316:</span> Plancks ja IMC-karsinnat <br /></span> 
            <span className="timetable-item">17:00 - 21:00 Kreisii ohjelmaa <br /></span>
            <span className="timetable-item">21:00 - 00:00 Jatkot & LaTe-Duo<br /></span>
            <span className="timetable-item">00:00 - <span className="jatkot">undefined</span> Jatkojen jatkot</span>
        </p>
    </>
  )
}

export default Saturday