import React from 'react';
import { Box, Stack, Typography} from '@mui/material';
import Logo from '../assets/images/Logo1.jpeg';

const Footer = () => {
  return (
    <Box mt="80px">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="100px" height="100px"/>
        <Typography variant="h5" pb="40px" mt="20px">
          Created By Morah Paul
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer