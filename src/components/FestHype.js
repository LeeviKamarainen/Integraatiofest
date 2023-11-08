import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Spotify, Youtube } from 'react-bootstrap-icons';
import ReactPlayerYoutube from 'react-player/lazy';
import ReactPlayer from 'react-player/lazy';

import appleMusic from '../assets/images/appleMusic.png'
import festVideo1 from '../assets/videos/integraatiofest1.mp4';
import festVideo2 from '../assets/videos/integraatiofest2.mp4';
import thumbnail1 from '../assets/images/thumbnail1.jpg';
import thumbnail2 from '../assets/images/thumbnail2.jpg';
import '../assets/styles/FestHype.css';


function FestHype() {

  return (
    <Box sx={{ flexGrow: 1 }} className="content-wrapper" >
      <Grid container className="grid">
        <Grid xs={12} md={8} backgroundColor="black">
          <div className="player-wrapper">
            <ReactPlayerYoutube
              className="react-player"
              url="https://www.youtube.com/watch?v=_hhJCuKkOuY"
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        </Grid>
        <Grid xs={12} md={4} className="grid-text" backgroundColor="black">
          <Typography variant="body1" className="hype-title"> LaTe-Duon virallinen Integraatiofest kappale  </Typography>
          <div className="button-wrapper">
            <Button variant="link" href="https://open.spotify.com/track/7kXPGRvZAoo0J0gzc8hEGu?si=43eeb1b3df5c474f" className="song-button" target="_blank"
                  sx={{
                      backgroundColor: "white",
                      color: "white",
                      borderRadius: "50px",
                      m: { xs: '1rem', sm: '1rem', md: '1rem', lg: '1.8rem'},
                      p: { xs: '0.5rem', sm: '0.5rem', md: '0.5rem', lg: '1rem', xl: "1.5rem"},
                      width: '90%',
                  }}
              >
                  <Spotify style={{color: 'rgb(30, 215, 96)', fontSize: "2.3rem"}}/>
              </Button>
              <Button variant="link" href="https://www.youtube.com/watch?v=_hhJCuKkOuY" className="song-button" target="_blank"
                  sx={{
                      backgroundColor: "white",
                      color: "white",
                      borderRadius: "50px",
                      m: { xs: '1rem', sm: '1rem', md: '1rem', lg: '1.8rem'},
                      p: { xs: '0.5rem', sm: '0.5rem', md: '0.5rem', lg: '1rem', xl: "1.5rem"},
                      width: '90%',
                  }}
              >
                  <Youtube style={{color: 'rgb(255,0,0)', fontSize:"2.3rem"}}/>
              </Button>
              <Button variant="link" href="https://music.apple.com/fi/album/integraatiofest/1704690429?i=1704690433" className="song-button" target="_blank"
                  sx={{
                      backgroundColor: "white",
                      color: "white",
                      borderRadius: "50px",
                      m: { xs: '1rem', sm: '1rem', md: '1rem', lg: '1.8rem'},
                      p: { xs: '0.5rem', sm: '0.5rem', md: '0.5rem', lg: '1rem', xl: "1.5rem"},
                      width: '90%',
                      height: '50%'
                  }}
              >
                  <img src={appleMusic} alt="Apple Music" style={{ width: "36.8px", height: "36.8px"}}/>
              </Button>
            </div>
        </Grid>
      </Grid>
        <Grid container className="grid">
          <Grid xs={12} md={12} className="grid-text">
            <Typography variant='body1' className="hype-title">
              Integraatiofest promovideot
            </Typography>
          </Grid>
          <Grid xs={12} md={6} className="grid-video">
            <Typography variant='body2' className="hype-title" sx={{textAlign: "center"}}>
              Osa 1
            </Typography>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={festVideo1}
                width="100%"
                height="100%"
                controls={true}
                light={thumbnail1}
              />
            </div>
          </Grid>
          <Grid xs={12} md={6} className="grid-video">
            <Typography variant='body2' className="hype-title" sx={{textAlign: "center"}}>
              Osa 2
            </Typography>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={festVideo2}
                width="100%"
                height="100%"
                controls={true}
                light={thumbnail2}
              />
            </div>
          </Grid>
      </Grid>
    </Box>
)}

export default FestHype;