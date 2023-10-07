import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

import title from '../assets/images/title.png';

import '../assets/styles/NavBar.css';


function Navbar() {
    const [anchoeElNav, setAnchorElNav] = React.useState(null);
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const handeMenuClose = () => {
        setAnchorElNav(null);
    }

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    }

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    }

    const menuItems = [
        {label: "Etusivu", href: '/', onClick: handeMenuClose},
        {label: "Aikataulu", href: '/aikataulu', onClick: handeMenuClose},
        {label: "Yhteystiedot", href: '/yhteystiedot', onClick: handeMenuClose},
        {label: "Yhteistyökumppanit", href: '/yhteistyokumppanit', onClick: handeMenuClose},
        {label: "Mistä saan lisää kaljaa?", href: '/kaljakaupat', onClick: handeMenuClose},
        {label: "Perkele1", href: '/perkele', onClick: handeMenuClose},
        {label: "Norppa 2.0", href: '/porkkana', onClick: handeMenuClose},
        {label: "Juustoa", href: '/edam', onClick: handeMenuClose},
    ]


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="" position="static" sx={{
        backgroundColor: '#F52C21',
      }}>
        <Toolbar disableGutters>


            {/* Desktop Menu */}
            {menuItems.map((item, index) => (
                <Button key={index} href={item.href} className="navbar-link" color="inherit" 
                sx={{
                    textShadow: '0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    fontSize: {lg: '0.75rem', xl: '0.9rem',},
                    wordBreak: 'break-word',
                    ml: 3,
                    mr: -2,
                    display: {xs: 'none', md: 'none', lg: 'block'} // Hide on mobile
                }}>
                    {item.label}
                </Button>
            ))}
            
            {/* Mobile Menu */}
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
                sx={{ ml: 2,
                    display: {md: 'block', lg: 'none'},
            }}>
                <MenuIcon />
            </IconButton>
                
            <Drawer anchor="top" open={openDrawer} onClose={handleDrawerClose} variant="temporary"
                PaperProps={{
                    sx: {
                        backgroundColor: '#F52C21',
                        color: '#fff',
                        display: {md: 'block', lg: 'block'},
                    }
                }}>
                {menuItems.map((item, index) => (
                    <Button key={index} href={item.href} className="navbar-link-mobile" color="inherit" 
                    sx={{
                        textShadow: '0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontSize: '0.7rem',
                        wordBreak: 'break-word',
                        mb: 0.5,
                        mt: 0.5,
                    }}>
                        {item.label}
                    </Button>
                ))}
            </Drawer>

            {/* Title */}
            <Box sx={{
            flexGrow: 1,
            textAlign: 'right',
            }}>
                <img className="navbar-title" alt="" src={title} />
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;