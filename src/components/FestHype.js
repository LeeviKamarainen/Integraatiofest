import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Spotify, Youtube } from 'react-bootstrap-icons';
import ReactPlayer from 'react-player/youtube';

import appleMusic from '../assets/images/appleMusic.png'
import '../assets/styles/FestHype.css'


function FestHype() {

  return (
    <Box sx={{ flexGrow: 1 }} className="content-wrapper" >
      <Grid container className="grid">
        <Grid xs={12} md={8} className="grid-image" backgroundColor="black">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=_hhJCuKkOuY"
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        </Grid>
        <Grid xs={12} md={4} className="grid-text" backgroundColor="black">
          <Typography variant="body1" className="song-title"> LaTe-Duon virallinen Integraatiofest kappale  </Typography>
          <div className="button-wrapper">
            <Button variant="link" href="https://open.spotify.com/track/7kXPGRvZAoo0J0gzc8hEGu?si=43eeb1b3df5c474f" className="song-button" target="_blank"
                  sx={{
                      backgroundColor: "white",
                      color: "white",
                      borderRadius: "50px",
                      m: { xs: '1rem', sm: '1rem', md: '1rem', lg: '2rem'},
                      p: { xs: '1rem', sm: '1rem', md: '1rem', lg: '1.5rem'},
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
                      m: { xs: '1rem', sm: '1rem', md: '1rem', lg: '2rem'},
                      p: { xs: '1rem', sm: '1rem', md: '1rem', lg: '1.5rem'},
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
                      m: { xs: '1rem', sm: '1rem', md: '1rem', lg: '2rem'},
                      p: { xs: '1rem', sm: '1rem', md: '1rem', lg: '1.5rem'},
                      width: '90%',
                      height: '50%'
                  }}
              >
                  <img src={appleMusic} style={{ width: "36.8px", height: "36.8px"}}/>
              </Button>
            </div>
            <div className="song-lyrics-wrapper">
              <div className="song-lyrics-column">
                <p>Kun illat pimenee</p>
                <p>Ja talvi lähenee</p>
                <p>Ilmassa väreilee</p>
                <p>Tuo kutsu minut saa</p>
                <p>Nyt ylös pomppaamaan</p>
                <p>En malta odottaa</p>

                <p>Mä suunnitelman teen</p>
                <p>Ja Lappeenrantaan meen</p>
                <p>Kaupunkiin myyttiseen</p>
                <p>Ja siellä odottaa</p>
                <p>Saunoja, juotavaa</p>
                <p>Tunnelma kohoaa</p>

                <p>Vaikka on edessä jokainen kaava</p>
                <p>Muuttumaan ei tulosta saada</p>
                <p>Lystiä paljon aamusta iltaan</p>
                <p>Yhdessä uskotaan taulukkokirjaan</p>
                <p>Laskettu, tutkittu tieteellisesti</p>
                <p>Meillä nyt on IntegraatioFesti</p>
                <p>Vaihteeksi matemaatikot pauhaa</p>
                <p>Laskimet jätetään hetkeksi rauhaan</p>
              </div>
              <div className="song-lyrics-column">
                <p>Kun illat pimenee</p>
                <p>Ja talvi lähenee</p>
                <p>Ilmassa väreilee</p>
                <p>Tuo kutsu minut saa</p>
                <p>Nyt ylös pomppaamaan</p>
                <p>En malta odottaa</p>

                <p>Mä suunnitelman teen</p>
                <p>Ja Lappeenrantaan meen</p>
                <p>Kaupunkiin myyttiseen</p>
                <p>Ja siellä odottaa</p>
                <p>Saunoja, juotavaa</p>
                <p>Tunnelma kohoaa</p>

                <p>Vaikka on edessä jokainen kaava</p>
                <p>Muuttumaan ei tulosta saada</p>
                <p>Lystiä paljon aamusta iltaan</p>
                <p>Yhdessä uskotaan taulukkokirjaan</p>
                <p>Laskettu, tutkittu tieteellisesti</p>
                <p>Meillä nyt on IntegraatioFesti</p>
                <p>Vaihteeksi matemaatikot pauhaa</p>
                <p>Laskimet jätetään hetkeksi rauhaan</p>
              </div>
            </div>
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