import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CountdownTimer from './CountdownTimer';

import '../assets/styles/Header.css';

function Header() {
  // const targetDate = '2023-11-10T10:00:00'
  const [targetDate, setTargetDate] = useState('2023-11-10T10:00:00');

  const [timerTitle, setTimerTitle] = useState('Integraatiofesteihin aikaa');

  const handleTimerEnd = (titleText, timerDate) => {
    setTimerTitle(titleText);
    setTargetDate(timerDate);
  };

    return (
        <header className="App-header">
          <AppBar sx={{
            position: 'static',
            backgroundColor: '#091720',
            height: '60px',
          }}>
            <Toolbar className="timer-bar" sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
              <Typography className="header-title" variant="h6" component="div" sx={{ 
                typography: {xs: 'body1', sm: 'h6', md:'h6', lg: 'h5', xl: 'h5'},
                flexGrow: 1,
                textAlign: 'center', 
                textShadow: '0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)',
                fontStyle: 'italic',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                wordBreak: 'break-word',
                }}>
                  {timerTitle}
              </Typography>
              <Typography className="header-timer" variant="h5" component="div" sx={{
                    fontSize: {xs: '0.6rem', sm: '0.7rem', md:'0.8rem', lg: '1rem', xl: '1rem'},
                    flexGrow: 1,
                    textShadow: '0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    paddingBottom: '0.5rem',
                  }}>
                    <CountdownTimer targetDate={targetDate} onTimerEnd={handleTimerEnd} />
              </Typography>
            </Toolbar>
          </AppBar>
        </header>
      )
}

export default Header