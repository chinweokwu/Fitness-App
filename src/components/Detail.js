import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import BodyPartImage from '../assets/images/workout.png';
import TargetImage from '../assets/images/yoga.png';
import EquipmentImage from '../assets/images/barbell.png';

const Detail = ({exerciseDetail}) => {
  const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart
    },
    {
      icon: TargetImage,
      name: target
    },
    {
      icon: EquipmentImage,
      name: equipment
    }
  ]
  return (
    <Stack 
      gap='60px'
      justifyContent="center"
      sx={{
        flexDirection: {
          lg:'row'
        },
        p: '20px',
        alignItems: 'center',
      }}
    >
    <img src={gifUrl} alt={name} loading="lazy" className="detail-image"/>
      <Stack 
        sx={{
          gap: {
            lg: '35px',
            xs: '20px'
          }
        }}>
        <Typography variant="h3">
          {name}
        </Typography>
        <Typography variant="h6">
          Workouts Keeps you strong. {name} {` `}
          is one of the best workouts to target your {target}. it will
          help you improve your mood and gain energy
        </Typography>
          {
            extraDetail.map((item) => (
              <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                <Button
                  sx={{
                    background: "#fff2db",
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px'
                  }}
                >
                  <img 
                    src={item.icon} 
                    alt="icon"
                    style={{
                      width: '40px',
                      height: '40px'
                    }}
                    />
                </Button>
                <Typography textTransform="capitalize" variant='h5'>
                  {item.name}
                </Typography>
              </Stack>
            ))
          }
      </Stack>
    </Stack>
  )
}

export default Detail