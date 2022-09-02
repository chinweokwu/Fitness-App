import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';
import {Box, Stack, Typography} from '@mui/material';

const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box
      sx={{
        mt: {
          lg: '100px',
          xs: '20px'
        }
      }}>
        <Typography variant='h3' mb={5}>
          Workouts that targets the same muscle group
        </Typography>
        <Stack direction='row' sx={{p: '2', position: 'relative'}}>
          {
            targetMuscleExercises.length !== 0 ?
            <HorizontalScrollbar data={targetMuscleExercises}/> :
            <Loader/>
          }
        </Stack>
    </Box>
  )
}

export default SimilarExercises
