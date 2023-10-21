import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CountdownTimer from './CountdownTimer';

import '../assets/styles/Header.css';

function Header() {
  // const targetDate = '2023-11-10T10:00:00'
  const [targetDate, setTargetDate] = useState('2023-10-21T17:29:30');

  const [timerTitle, setTimerTitle] = useState('Integraatiofestit alkaa');

  const handleTimerEnd = (titleText, timerDate) => {
    setTimerTitle(titleText);
    setTargetDate(timerDate);
  };

    return (
        <header className="App-header">
          <AppBar sx={{
            position: 'static',
            backgroundColor: '#091720',
            height: '70px',
          }}>
            <Toolbar className="timer-bar" sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
              <Typography className="header-title" variant="h6" component="div" sx={{ 
                flexGrow: 1,
                textAlign: 'center', 
                textShadow: '0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '1.7rem',
                wordBreak: 'break-word',
                }}>
                  {timerTitle}
              </Typography>
              <Typography className="header-timer" variant="h6" component="div" sx={{
                    flexGrow: 1,
                    fontSize: '1.1rem',
                  }}>
                    <CountdownTimer targetDate={targetDate} onTimerEnd={handleTimerEnd} />
              </Typography>
            </Toolbar>
          </AppBar>
        </header>
      )
}

export default Header