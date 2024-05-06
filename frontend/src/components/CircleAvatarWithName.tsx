import * as React from 'react';
import { Typography, Avatar, Box, useTheme, useMediaQuery } from '@mui/material';

interface Props {
  name: string;
  imageSrc: string;
  bio?: string;
}

const CircleAvatarWithName: React.FC<Props> = ({ name, imageSrc, bio }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
      <Avatar sx={{ width: 200, height: 200, mb: 2 }} src={imageSrc} alt={name} />
      <Typography variant={isSmallScreen ? "h4" : "h2"} align="center">{name}</Typography>
      {bio && <Typography variant={isSmallScreen ? "h6" : "h5"} align="center">{bio}</Typography>}
    </Box>
  );
};

export default CircleAvatarWithName;
