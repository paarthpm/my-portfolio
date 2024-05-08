import { Typography } from '@mui/material'
import { PiPlugsConnectedBold } from "react-icons/pi";
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { MdEmail } from "react-icons/md";
import { TbSocial } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
const Contact = () => {
  const emailAddress = 'parthapratim0100@gmail.com';
  return (
  <Typography>
    <div className='connect-mid-panel'>
      <PiPlugsConnectedBold  className='connect-icon'/>
      <h2>Connect with me!</h2>
    </div>  
    <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
        <Card sx={{ minWidth: 275 }} className='connect-card'>
          <CardContent>
            <MdEmail className='connect-email-icon'/>
            <Typography sx={{ mb: 1.5 }} component="div" className='card-text card-head'>
              EMAIL
            </Typography>
            <hr />
            <Typography variant="body2"  className='card-text'>
              <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </Typography>
          </CardContent>
        </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ minWidth: 275 }} className='connect-card'>
            <CardContent>
              <TbSocial  className='connect-social-icon'/>
              <Typography sx={{ mb: 1.5 }} component="div" className='card-text card-head'>
                SOCIAL
              </Typography>
              <hr />
              <Box display="flex" alignItems="center" className="social-icons-row">
                <a href="https://www.linkedin.com/in/partha-mout-1188349a/" target='_blank'><FaLinkedin className='connect-social-icon social-style'/></a>
                <a href="https://github.com/paarthpm" target='_blank'><FaGithub className='connect-social-icon social-style'/></a>
                <a href="https://www.instagram.com/paarth_pratim/" target='_blank'><FaInstagram className='connect-social-icon social-style'/></a>
                <a href="https://www.youtube.com/channel/UCXQlC4ZxlY7mr_pvUR9lB7w" target='_blank'><FaYoutube className='connect-social-icon social-style'/></a>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card sx={{ minWidth: 275 }} className='connect-card'>
          <CardContent>
            <IoMdPhonePortrait className='connect-social-icon'/>
            <Typography sx={{ mb: 1.5 }} component="div" className='card-text card-head'>
              PHONE
            </Typography>
            <hr />
            <Typography variant="body2"  className='card-text'>
              +91-6901262330
            </Typography>
          </CardContent>
        </Card>
        </Grid>
      </Grid>    
  </Typography>
  )
}

export default Contact