import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises}) => {
 
    return (
   <Box sx={{ mt: { lg: '100px', xs: '0' }}}>
    <Typography sx={{ fontSize: { xs: '35px'}, fontWeight: { xs: '700'}, padding: {xs: '0px 12px'}}}
    variant="h3" mt={6} mb={5} 
    justifyContent="center" alignItems="center" display="flex">Exercises that target the same muscle group</Typography>

    <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
        {targetMuscleExercises.length ? 
        <HorizontalScrollbar data={targetMuscleExercises}  /> : <Loader />}
    </Stack>
    <Typography  sx={{ fontSize: { xs: '35px'}, fontWeight: { xs: '700'}, padding: {xs: '0px 12px'}}}
    variant="h3" mt={4} mb={6} justifyContent="center" alignItems="center" display="flex">Exercises that use the same equipment</Typography>

    <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
        {equipmentExercises.length ? 
        <HorizontalScrollbar data={equipmentExercises}  /> : <Loader />}
    </Stack>
   </Box>
  )
}

export default SimilarExercises