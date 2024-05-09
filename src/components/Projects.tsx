import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
const Projects = () => {
  return (
    <Typography>
      <h4>Foundational Projects</h4>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className='project-dark-section'>
          <h4>Knowmore <span className='text-highlight-red'>Assam</span></h4>
          <p>An informative webiste with topics on Assam. Learn, explore, join the writer's community and post articles.</p>
          <a href="https://youtu.be/o8ZoScDuxhM" target='_blank'><Button variant="contained" size="small" className='section-btn'>See video</Button></a>
        </Grid>
        <Grid item xs={12} sm={6} className='project-light-section'>
          <img src="knowmore-assam-first-view.png" alt="Knowmore Assam Landing Page" width={'100%'}/>
        </Grid>
        <Grid item xs={12} sm={6} className='project-light-section'>
          <img src="objection-detection-project.jpg" alt="Knowmore Assam Landing Page" className='object-detection-img'/>
        </Grid>
        <Grid item xs={12} sm={6} className='project-dark-section'>
          <h4>Smart <span className='text-highlight'>Music Player</span></h4>
          <p>Control music player with hand gestures. Play a song, navigate through playlist with simple hand postures in front of your camera.</p>
        </Grid>
      </Grid>
      <h4>YouTube links for some of my videos</h4>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} className=''>
        <div className="video-container">
          <iframe src="https://www.youtube.com/embed/Z7zMMa8Z83Q?si=PtKPRG_mpKy2lOwA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        </Grid>
        <Grid item xs={12} sm={6} className='project-normal-section'>
          <p className='section-para'>I did a dig on a fake recruitment website which was spamming and looting hundreds of job aspirants.</p>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} className='project-normal-section'>
          <p className='section-para'>Helped my friend by analyzing a fake shopping website which was gathering users via Instagram and delivering wrong products.</p>
        </Grid>
        <Grid item xs={12} sm={6} className=''>
        <div className="video-container">
          <iframe src="https://www.youtube.com/embed/0oDYBjKvx2w?si=n-QKcFz-S1CeFG6t" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} className=''>
        <div className="video-container">
          <iframe src="https://www.youtube.com/embed/Jca4aa_nBok?si=aAlgCeHpH9hg3Cos" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        </Grid>
        <Grid item xs={12} sm={6} className='project-normal-section'>
          <p className='section-para'>Joy of Nature is an Instagram effect which utilizes the back camera of modern phones with gyroscopes. This effect was my submission to Hackathon Augmented Reality competition from Facebook.</p>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} className='project-normal-section'>
          <p className='section-para'>Gunin and Dhonti are two animated characters which I built and animated using Adobe Animate and Illustratior. It's a promotional fun informative video for Knowmore Assam site.</p>
        </Grid>
        <Grid item xs={12} sm={6} className=''>
        <div className="video-container">
          <iframe src="https://www.youtube.com/embed/45ElMUmae9M?si=FfSzcUte5Sz01Xu3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        </Grid>
      </Grid>
  </Typography>
  )
}

export default Projects