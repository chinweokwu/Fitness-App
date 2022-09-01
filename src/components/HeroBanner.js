import React from 'react';
import {Box, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/HeroBanner1.jpg'
const HeroBanner = () => {
  return (
    <Box 
      sx={{
        mt:{lg: '212px', xs:'70px'},
        ml:{sm: '50px'},
      }} 
      postion='relative' 
      p='20px'
      mt="23px"
      mb="30px"
    >
      <Box>
       <Typography 
        color="#FF2625" 
        fontWeight="600" 
        fontSize="26px"
      >
       Gorilla Fitness Club
      </Typography>
      <Typography 
      fontWeight={700} 
      sx={{
        fontSize: {
          lg:'44px', 
          xs: '40px'
        }
      }}
      >
        Body, Soul <br/> and Mind
      </Typography>
      <Typography 
        fontSize="22px" 
        lineHeight="35px"
        mb={4}
      >
         Check out our crazy workout exercises  
      </Typography>
      <Button 
        variant="contained"
        color="error"
        href='#exercises'
        sx={{
          backgroundColor: '#ff2625',
          padding: "12px"
        }}
      > Explore Exercises</Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        fontSize="200px"
        sx={{
          opacity: 0.1,
          display: {lg: 'block', xs:'none'}
        }}
      >
        Workouts
      </Typography>
      </Box>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner