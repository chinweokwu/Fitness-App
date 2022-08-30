import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home'
import Bavbar fo
import './App.css';

const App = () => {
  return (
    <Box>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
      </Routes>
    </Box>
  )
}

export default App
