import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
const Work = () => {
  return (
    <Typography>
        <h4>Work</h4>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <img src="alegralabs-logo.png" alt="Alegra Labs Logo" style={{width:'200px', backgroundColor:'white'}} />
          </Grid>
          <Grid item xs={12} sm={8} className='work-grid-section'>
            <h5>Software Engineer</h5>
            <p>April, 2021 - <em>Present</em></p>
          </Grid>
        </Grid>
        <p>Please see my <a href='https://www.linkedin.com/in/partha-mout-1188349a/' className='work-link' target="_blank">LinkedIn</a> for more career details.</p>
    </Typography>
  )
}

export default Work