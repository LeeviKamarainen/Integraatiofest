import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Spotify, Youtube } from 'react-bootstrap-icons';


import '../../assets/styles/FestHype.css'


function FestHype() {

  return (
    <Box sx={{ flexGrow: 1 }} className="content-wrapper" >
      <Grid container className="grid">
        <Grid xs={12} md={12} className="grid-image" backgroundColor="black">
            <Typography variant="body1" className="song-title"> Virittäydy festitunnelmaan LaTe-Duon virallisella Integraatiofest kappaleella!  </Typography>

        </Grid>
        <Grid xs={12} md={12} className="grid-text" backgroundColor="black">
            <Button variant="link" href="https://open.spotify.com/track/7kXPGRvZAoo0J0gzc8hEGu?si=43eeb1b3df5c474f" className="song-button" target="_blank"
                sx={{
                    backgroundColor: "white",
                    color: "white",
                    borderRadius: "50px",
                    m: '1rem',
                    p: '1rem',
                }}
            >
                <Spotify style={{color: 'rgb(30, 215, 96)', fontSize:"2.3rem"}}/>
            </Button>
            <Button variant="link" href="https://www.youtube.com/watch?v=_hhJCuKkOuY" className="song-button" target="_blank"
                sx={{
                    backgroundColor: "white",
                    color: "white",
                    borderRadius: "50px",
                    m: '1rem',
                    p: '1rem',
                }}
            >
                <Youtube style={{color: 'rgb(255,0,0)', fontSize:"2.3rem"}}/>
            </Button>
        </Grid>
      </Grid>
        <Grid container className="grid">
          <Grid xs={12} md={4} className="grid-image">
        </Grid>
        <Grid xs={12} md={8} className="grid-text">
        </Grid>
      </Grid>
      <Grid container className="grid">
          <Grid xs={12} md={4} className="grid-image">
          </Grid>
          <Grid xs={12} md={8} className="grid-text" backgroundColor="white">
          </Grid>
      </Grid>
    </Box>
)}

export default FestHype;