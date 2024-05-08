import { Typography } from '@mui/material'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
const Projects = () => {
  return (
    <Container maxWidth="lg">
         <Typography>
          <h4>Projects</h4>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} className='project-left-section'>
            </Grid>
            <Grid item xs={12} sm={6} className='project-right-section'>
            </Grid>
          </Grid>
          <h4>YouTube links for some of my videos</h4>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} className='s'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Z7zMMa8Z83Q?si=PtKPRG_mpKy2lOwA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </Grid>
            <Grid item xs={12} sm={6} className=''>
            </Grid>
          </Grid>
      </Typography>
    </Container>
  )
}

export default Projects