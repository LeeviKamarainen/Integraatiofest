import React from 'react'
import { Typography } from '@mui/material'

import '../../assets/styles/Schedule.css'

function Sunday() {
  return (
    <>
        <Typography sx={{ typography: { xs: 'h6', md: 'h2'}}} component="h2" textAlign="left" className="timetable-title"> Sunnuntai </Typography>
        <p className="timetable-text">
            <span className="timetable-item">10:00 - 19:00 <span className="location">Ylioppilastalon kellari:</span> Sillis by <span className="kotipizza">Kotipizza</span> <br /></span>
        </p>
    </>
  )
}

export default Sunday