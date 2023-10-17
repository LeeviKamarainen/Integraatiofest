import React from 'react'
import { Typography } from '@mui/material'

import '../../assets/styles/TimeTable.css'

function Lauantai() {
  return (
    <>
        <Typography variant="h4" component="h2" textAlign="left" className="timetable-title"> Sunnuntai </Typography>
        <p className="timetable-text">
            <span className="timetable-item">09:00 - 18:00 Sillis ja paljut lämpimänä @Kellari<br /></span>
            <span className="timetable-item">10:00 - 11:00 Sillisibingo <br /></span>
        </p>
    </>
  )
}

export default Lauantai