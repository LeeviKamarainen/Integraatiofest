import React from 'react'
import { Typography } from '@mui/material'

import '../../assets/styles/Schedule.css'

function Saturday() {
  return (
    <>
        <Typography sx={{ typography: { xs: 'h6', md: 'h2'}}} component="h2" textAlign="left" className="timetable-title"> Lauantai </Typography>
        <p className="timetable-text">
            <span className="timetable-item">08:30 - 10:00 <span className="location">Ylioppilastalon kellari:</span> Aamupala by VIBA <br /></span>
            <span className="timetable-item">10:00 - 10:45 <span className="location">Viipuri-sali:</span> Otto "Indiana Jones" Salmela - Kadonneen approksimaation metsästys <br /></span>
            <span className="timetable-item">10:45 - 11:30 <span className="location">Viipuri-sali:</span> Henning Kirschemann - CERN research in Finland <br /></span>
            <span className="timetable-item">12:00 - 14:00 <span className="location">Yliopiston aula:</span> Posterisessio ja haalarimerkkitori<br /> </span> 
            <span className="timetable-item">12:00 - 12:45 <span className="location">Viipuri-sali:</span> Jesse Railo - Miten tomografiaa voidaan tutkia geometrian avulla <br /></span>
            <span className="timetable-item">13:00 - 14:00 <span className="location">Viipuri-sali:</span> Heikki Kälviäinen - Computer vision applications and challenges of machine learning <br /></span>
            <span className="timetable-item">14:00 - 14:45 <span className="location">Viipuri-sali:</span> Teemu Härkönen - Stokastiset prosessit, spektroskopia ja bayesiläiset neuroverkot <br /></span>
            <span className="timetable-item">14:00 - 16:00 <span className="location">1316:</span> SFMO:n syyskokous <br /></span>
            <span className="timetable-item indent"><span className="location">3305 / 3306:</span> PLANCKS ja IMC -karsinnat <br /></span> 
            <span className="timetable-item">15:00 - 17:00 Majoitus avoinna <br /></span>
            <span className="timetable-item">17:00 - 21:00 <span className="location"> Kampusalue:</span> <b>Appro</b>Ξmaatio e<sup>it</sup>, t ∈ [0, 2π]  <br /></span>
            <span className="timetable-item">21:00 - 00:00 <span className="location"> Ylioppilastalo:</span> Jatkot ja LaTe-Duo<br /></span>
            <span className="timetable-item">00:00 - <span className="jatkot">undefined</span> <span className="location">Ylioppilastalon kellari: </span> Jatkojen jatkot</span>
        </p>
    </>
  )
}

export default Saturday