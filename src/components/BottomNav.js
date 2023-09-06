import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Spotify } from 'react-bootstrap-icons';
import { Youtube } from 'react-bootstrap-icons';
import { Telegram } from 'react-bootstrap-icons';
function BottomNavBar() {
    return (
      <Navbar className="bottomnav" fixed="bottom" bg="none" variant="dark" style={{ width: '10%', left:'45%', borderRadius: '10px', bottom: "1%"}}>
        <Container >
          <Navbar.Brand>
            <Button variant="link" href="https://open.spotify.com/track/7kXPGRvZAoo0J0gzc8hEGu?si=43eeb1b3df5c474f">
              <Spotify style={{color: 'rgb(0, 128, 55)'}}/>
            </Button>
            <Button variant="link" href="https://www.youtube.com/watch?v=_hhJCuKkOuY">
              <Youtube style={{color: 'rgb(165, 42, 42)'}}/>
            </Button>
            <Button variant="link" href="https://t.me/+DvADS3Tw5S9mYzZk">
              <Telegram style={{backgroundColor:"white", borderRadius:"10px"}}/>
            </Button>
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
  
  export default BottomNavBar;