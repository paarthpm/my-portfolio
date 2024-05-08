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
      <Typography variant={isSmallScreen ? "h4" : "h2"} align="center" style={{ fontFamily: '"Caveat", cursive', fontOpticalSizing: 'auto', fontWeight: '<weight>', fontStyle: 'normal' }}>{name}</Typography>
      {bio && <Typography variant={isSmallScreen ? "body2" : "body1"} align="center" style={{ fontFamily: '"M PLUS Code Latin", monospace', fontWeight: 200, fontStyle: 'normal', fontOpticalSizing: 'auto', fontVariationSettings:'"wdth" 100'}}>{bio}</Typography>}
    </Box>
  );
};

export default CircleAvatarWithName;
