import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import MediaQuery from "react-responsive";


import lyseo1 from '../../assets/images/lyseo_img1.jpg';
import lyseo2 from '../../assets/images/lyseo_img2.jpg'
import '../../assets/styles/Accommodation.css';


function Accommodation() {

  return (
    <>
      <MediaQuery minWidth={1020}>
        <Box sx={{ flexGrow: 1 }} className="content-wrapper" >
          <Grid container className="grid" direction="row">
            <Grid md={6} className="grid-image">
              <img src={lyseo2} alt="Lyseo frontdoor" className="grid-image img1" />
              <Typography variant="body2" sx={{alignSelf: "center"}}  className="accommodation-desc">
              Front door to accommodation
              </Typography>
            </Grid>
            <Grid md={6} >
              <Typography sx={{ typography: {xs: 'h6', sm: 'h4'}}} className="accommodation-title">
                Accommodation at Lappeenrannan Lyseo Upper Secondary School
              </Typography>
              <Typography variant="body1" className="accommodation-secondary">
                The accommodation's address is: Lönnrotinkatu 3, 53600 Lappeenranta
              </Typography>
              <br />
              <Typography variant="body1" className="accommodation-text">
                <b>In the accommodation, consuming alcohol, drinking, and any similar indulgence is strictly forbidden!</b> <br /> <br />
                Accommodation is open during the day only at times separately announced in the schedule. 
                During the night from 23:00 to 08:00, the doors to the accommodation are closed, and night attendants will open them for festival-goers upon arrival. 
                There is a shower opportunity in the accommodation on both mornings from 08:00 to 10:30. 
                The showers are located in the same building as the sports hall.
              </Typography>
            </Grid>
            <Grid md={6} className="grid-image">
              <img src={lyseo1} alt="Sports hall frontdoor" className="grid-image img2" />
              <Typography variant="body2" sx={{alignSelf: "center"}}  className="accommodation-desc">
                Front door to sports hall (showers)
              </Typography>
            </Grid>
            <Grid md={6} >
            </Grid>
          </Grid>
        </Box>
      </MediaQuery>
      <MediaQuery maxWidth={1019}>
        <Box sx={{ flexGrow: 1 }} className="content-wrapper" >
          <Grid container className="grid" direction="row">
            <Grid xs={12} sx={{paddingBottom: "1rem"}}>
                <Typography sx={{ typography: {xs: 'h6', sm: 'h4'}}} className="accommodation-title">
                Accommodation at Lappeenrannan Lyseo Upper Secondary School
                </Typography>
                <Typography variant="body1" className="accommodation-secondary">
                The accommodation's address is: Lönnrotinkatu 3, 53600 Lappeenranta
                </Typography>
                <br />
                <Typography variant="body1" className="accommodation-text">
                  <b>In the accommodation, consuming alcohol, drinking, and any similar indulgence is strictly forbidden!</b> <br /> <br />
                  Accommodation is open during the day only at times separately announced in the schedule. 
                  During the night from 23:00 to 08:00, the doors to the accommodation are closed, and night attendants will open them for festival-goers upon arrival. 
                  There is a shower opportunity in the accommodation on both mornings from 08:00 to 10:30. 
                  The showers are located in the same building as the sports hall.
                </Typography>
              </Grid>
            <Grid xs={12} className="grid-image">
              <img src={lyseo2} alt="Lyseo frontdoor" className="grid-image img1" />
              <Typography variant="body2" sx={{alignSelf: "center"}}  className="accommodation-desc">
                Front door to accommodation
              </Typography>
            </Grid>
            <Grid xs={12} className="grid-image">
              <img src={lyseo1} alt="Sports hall frontdoor" className="grid-image img2" />
              <Typography variant="body2" sx={{alignSelf: "center"}}  className="accommodation-desc">
                Front door to sports hall (showers)
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </MediaQuery> 
    </>
)}

export default Accommodation;