import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AboutMe from './AboutMe';
import Work from './Work';
import Projects from './Projects';
import Contact from './Contact';
import CircleAvatarWithName from './CircleAvatarWithName';
import Container from '@mui/material/Container'
interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['About Me', 'Work', 'Projects', 'Contact'];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // drawer handler for mobile view
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  //home button handler
  const handleHomeClick = () => {
    const circleAvatarSection = document.getElementById("main-section");
    if (circleAvatarSection) {
      circleAvatarSection.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false); 
    }
  };

  //navigation button handler
  const handleNavItemClicked = (index: number) => {
    const sectionId = `section-${index}`;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  // for mobile view
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Home
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavItemClicked(index)}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // Wrapper component for CircleAvatarWithName
  const CircleAvatarWithNameWrapper = (props: any) => {
    return (
      <div id={props.id}>
        <CircleAvatarWithName {...props} />
      </div>
    );
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" className="custom-appbar" elevation={0}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, cursor:'pointer' }}
              onClick={handleHomeClick}
            >
              Home
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item, index) => (
                <Button key={item} sx={{ p: 2, color: '#fff', textTransform:'capitalize' }} onClick={() => handleNavItemClicked(index)}>
                  {item}
                </Button>
              ))}
              <a href="https://raw.githubusercontent.com/paarthpm/my-portfolio/main/resume_partha_mout.pdf"><Button variant="outlined" sx={{ color: '#fff',borderColor: '#fff', textTransform:'capitalize' }} color="primary">Resume</Button></a>
            </Box>
          </Toolbar>
        </AppBar>
        {/* for mobile view */}
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,  bgcolor: 'primary.main' },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        {/* main content */}
        <Box component="main" id="main-section" sx={{ p: 3 }}>
          <Toolbar />
          <CircleAvatarWithNameWrapper  name="Partha Pratim Mout" imageSrc="profile.jpg" bio="Software Engineer | Creative Soul"/> 
          <div id="section-0" className="section-style">
            <AboutMe />
          </div>
          <div id="section-1" className="section-style">
            <Work />
          </div>
          <div id="section-2" className="section-style">
            <Projects />
          </div>
          <div id="section-3" className="section-style">
            <Contact />
          </div>
        </Box>
      </Box>
      <div className='footer'>&copy; 2024 Partha Pratim Mout</div>
    </Container>
    
  );
}
