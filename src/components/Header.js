import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Icon from '@mui/material/Icon';

import CountdownTimer from './CountdownTimer';
import IntegralSvg from './IntegralSVG';

import titleLogoOld from '../assets/images/titleOld.png';
import '../assets/styles/Header.css';
import { SvgIcon } from '@mui/material';

function Header() {
  const targetDate = '2023-11-10T10:00:00'



    return (
        <Box sx={{ flexGrow: 1 }}>

          <AppBar sx={{
            position: 'static',
            backgroundColor: '#F52C21',
          }}>
            <Toolbar>
              <IconButton >
                <MenuIcon />
              </IconButton>
              <Typography variant="h4" component="div" sx={{ 
                flexGrow: 1,
                textAlign: 'left', 
                textShadow: '0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                }} >
                <SvgIcon component={IntegralSvg} />Integraatiofest <SvgIcon component={IntegralSvg} />
              </Typography>
              <Typography variant="h4" component="span" sx={{
                flexGrow: 1,
              }}>
                <CountdownTimer targetDate={targetDate}/>
              </Typography>
            </Toolbar>
          </AppBar>
          {/* <img src={titleLogoOld} className="App-header-logo" alt="headerLogo" /> */}
        </Box>
      )
}

export default Header