import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Spotify } from 'react-bootstrap-icons';
import { Youtube } from 'react-bootstrap-icons';
import { Telegram } from 'react-bootstrap-icons';
function LeftNavBar() {
    return (
      <Navbar className="bottomnav" expand="lg" fixed="left" bg="none" variant="dark" style={{ width: '10%', left:'0%', top:"10%", height:"50vh", borderRadius: '10px', flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start"}}>
            <Button variant="link" href="https://open.spotify.com/track/7kXPGRvZAoo0J0gzc8hEGu?si=43eeb1b3df5c474f">
              <Spotify style={{color: 'rgb(0, 128, 55)', fontSize:"3rem"}}/>
            </Button>
            <Button variant="link" href="https://www.youtube.com/watch?v=_hhJCuKkOuY">
              <Youtube style={{color: 'rgb(0,0,0)', fontSize:"3rem"}}/>
            </Button>
            <Button variant="link" href="https://t.me/+DvADS3Tw5S9mYzZk">
              <Telegram style={{fontSize:"3rem"}}/>
            </Button>
      </Navbar>
    );
  }
  
  export default LeftNavBar;