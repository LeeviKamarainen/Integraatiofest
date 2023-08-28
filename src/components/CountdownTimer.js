import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeLeft = targetTime - now;

    if (timeLeft <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
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
      seconds
    };
  };

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
        <span className="timer-label">Days</span>
      </div>
      <div className="timer-block">
        <span className="timer-value">{timeLeft.hours}</span>
        <span className="timer-label">Hours</span>
      </div>
      <div className="timer-block">
        <span className="timer-value">{timeLeft.minutes}</span>
        <span className="timer-label">Minutes</span>
      </div>
      <div className="timer-block">
        <span className="timer-value">{timeLeft.seconds}</span>
        <span className="timer-label">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;