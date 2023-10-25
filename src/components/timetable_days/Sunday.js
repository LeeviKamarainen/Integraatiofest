import React from 'react'
import { Typography } from '@mui/material'

import '../../assets/styles/Schedule.css'

function Sunday() {
  return (
    <>
        <Typography sx={{ typography: { xs: 'h6', md: 'h2'}}} component="h2" textAlign="left" className="timetable-title"> Sunnuntai </Typography>
        <p className="timetable-text">
            <span className="timetable-item">09:00 - 18:00 Sillis by Kotipizza @ Kellari<br /></span>
            <span className="timetable-item indent">10:00 - 11:00 Sillisibingo <br /></span>
        </p>
    </>
  )
}

export default Sunday