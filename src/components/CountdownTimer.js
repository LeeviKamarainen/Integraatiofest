import React, { useState, useEffect, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

import '../assets/styles/CountdownTimer.css'

const CountdownTimer = ({ targetDate, onTimerEnd }) => {

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeLeft = targetTime - now;

    if (timeLeft <= 0) {
      onTimerEnd('Integraatiofestit käynnissä like Nevör beför', '2023-10-21T18:20:00');
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }, [targetDate, onTimerEnd]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [calculateTimeLeft]);

  return (
    <div className="countdown-timer">
        <div className="timer-block">
          <span className="timer-value">{timeLeft.days}</span>
          <span className="timer-label">Päivää</span>
        </div>
        <div className="timer-block">
          <span className="timer-value">{timeLeft.hours}</span>
          <span className="timer-label">Tuntia</span>
        </div>
        <div className="timer-block">
          <span className="timer-value">{timeLeft.minutes}</span>
          <span className="timer-label">Minuuttia</span>
        </div>
        <div className="timer-block">
          <span className="timer-value">{timeLeft.seconds}</span>
          <span className="timer-label">Sekuntia</span>
        </div>
    </div>
  );
};


export default CountdownTimer;