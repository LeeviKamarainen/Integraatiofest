import React from 'react'
import TimeTable from './TimeTable'
import CountdownTimer from './CountdownTimer'
// import { useState } from 'react'

import '../App.css'

function MainContent() {
  const targetDate = '2021-09-03T16:00:00.000Z'

  // Norppa animation, not used atm!
  
  // const [animationSpeed, setAnimationSpeedValue] = useState(1);
  // const [clickCount, setClickCount] = useState(0);
  // const [animationStarted, setAnimationStarted] = useState(false);
  // const handleSliderChange = (newValue) => {
  //   setAnimationSpeedValue(newValue); // Update the modified value
  // };


  // const handleClick = () => {
  //   // Increment the click count when the image is clicked.
  //   setClickCount(clickCount + 1);
  //   // Check if the image has been clicked five times.
  //   if (clickCount >= 5) {
  //     // Start the animation.
  //     console.log(animationSpeed)
  //     setAnimationSpeedValue(animationSpeed+0.2);
  //     setAnimationStarted(true);
  //   }
  // };

  return (
      <div className="content-wrapper">
        <TimeTable />
        <div className="flex-container">
          <div className="flex-wrapper timetable">
          </div>
        </div>
      </div>
  )
}

export default MainContent