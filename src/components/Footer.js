import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/images/Logo-1.png'
const Footer = () => {
  return (
    <Box mt="80px" bgColor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />

        <Typography variant="h6" pb="40px" mt="1px">
          Developed By <span color='red'>Ihekuna Emmanuel</span>
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer