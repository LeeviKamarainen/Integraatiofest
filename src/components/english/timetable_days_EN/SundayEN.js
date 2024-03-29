import React from 'react'
import { Typography } from '@mui/material'

import '../../../assets/styles/Schedule.css'

function Sunday() {
  return (
    <>
        <Typography sx={{ typography: { xs: 'h6', md: 'h2'}}} component="h2" textAlign="left" className="timetable-title"> Sunday </Typography>
        <p className="timetable-text">
            <span className="timetable-item">10:00 - 18:00 <span className="location">Student union building basement:</span> Sillis by <span className="kotipizza">Kotipizza</span> <br /></span>
        </p>
    </>
  )
}

export default Sunday