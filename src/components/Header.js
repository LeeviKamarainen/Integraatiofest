import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CountdownTimer from './CountdownTimer';

import '../assets/styles/Header.css';

function Header() {
  const targetDate = '2023-11-10T10:00:00'

    return (
        <header className="App-header">
          <AppBar sx={{
            position: 'static',
            backgroundColor: '#091720',
            height: '70px',
          }}>
            <Toolbar>
              <Typography className="header-title" variant="h6" component="div" sx={{ 
                flexGrow: 1,
                textAlign: 'center', 
                textShadow: '0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '0.9rem',
                wordBreak: 'break-word',
                }}>
                  Integraatiofesteihin aikaa
                  <Typography className="header-timer" variant="h6" component="span" sx={{
                    flexGrow: 1,
                    fontSize: '0.6rem',
                  }}>
                    <CountdownTimer targetDate={targetDate}/>
                  </Typography>
              </Typography>
            </Toolbar>
          </AppBar>
        </header>
      )
}

export default Header