import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Telegram } from 'react-bootstrap-icons';

import integraatiofest from '../assets/images/telegram_kuva.png';
import '../assets/styles/Contact.css'


function Contact() {

  return (
    <Box sx={{ flexGrow: 1 }} className="content-wrapper" >
      <Grid container className="excursion" >
          <Grid xs={12} md={4} >
            <img src={integraatiofest} alt="Integraatiofest" className="grid-image" />
          </Grid>
          <Grid xs={12} md={8} backgroundColor="black" className="grid-text">
            <Typography sx={{ typography: {xs: 'h6', sm: 'h4'}}} className="contact-title">
            Hyödyllisiä yhteystietoja
            </Typography>


            <Typography variant="body1" className="contact-text">
            <b>Linkki tapahtuman infokanvalle</b>
            </Typography>    
  
            <Button variant="link" href="https://t.me/+DvADS3Tw5S9mYzZk" className="contact-button" target="_blank">
                <Telegram style={{color: 'rgb(34, 158, 217)', fontSize: "2rem"}}/>
            </Button>

            <Typography variant="body1" className="contact-text">
            <b>Tapahtuman häirintäyhdyshenkilöt</b> <pre/>
            Emma Hannula <br />
            TG: @emmahann <br /> <pre />

            Leevi Kämäräinen <br />
            TG: @leevi123 <br /> <pre />
            <b>Tapahtuman pääjärjestäjä</b> <pre />
            Pauli Anttonen <br />
            integraatiofest@lateksii.fi <br />
            TG: @pauliant <br /> <pre />

            <b>Yleinen hätänumero: 112 </b> <br />
            <b>Myrkytystietokeskus: 0800 147 111 </b><br />
            </Typography>
          </Grid>
      </Grid>
        <Grid container className="excursion" >
          <Grid xs={12} md={4} className="timetable-image" backgroundColor="white">

          </Grid>
          <Grid xs={12} md={8} backgroundColor="black">
      
          </Grid>
      </Grid>
      <Grid container className="excursion" >
          <Grid xs={12} md={4} className="timetable-image" backgroundColor="white">

          </Grid>
          <Grid xs={12} md={8} backgroundColor="black">
            
          </Grid>
      </Grid>
    </Box>
)}

export default Contact;