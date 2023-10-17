import React from 'react'
import { Typography } from '@mui/material'

import '../../assets/styles/Schedule.css'

function Sunday() {
  return (
    <>
        <Typography sx={{ typography: { xs: 'h6', md: 'h2'}}} component="h2" textAlign="left" className="timetable-title"> Sunnuntai </Typography>
        <ul className="timetable-text">
            <span className="timetable-item">09:00 - 18:00 Sillis ja paljut lämpimänä @ Kellari<br /></span>
            <span className="timetable-item">10:00 - 11:00 Sillisibingo <br /></span>
        </ul>
    </>
  )
}

export default Sunday