import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../assets/images/Logo.png'
import { BorderBottom } from '@mui/icons-material'
const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{
        gap: { sm: '122px', xs: '10px' }, mt: { sm: '32px', xs:  '20px'}, justifyContent: 'none'
    }} px="20px">
        <Link to="/">
          <img src={Logo} alt="Logo" style={{
             width: '48px', height: '48px', margin: '0 20px'
          }} />
        </Link>

        <Stack
          direction="row"
          gap="40px"
          fontSize="24px"
          alignItems="flex-end"
          sx={{ gap: { sm: '40px', xs: '20px'}, marginLeft: {sm: '0',  xs: '60px'}, flexDirection: {sm: 'row', xs: 'column'}}}
        >
            <Link to="/" style={{ textDecoration: 'none', color: '#321212', borderBottom: '3px solid #fc7'}}>Home</Link>

            <a href='#exercises' style={{ textDecoration: 'none', color: '#3a1212'}}>
                Execises
            </a>
        </Stack>
    </Stack>
  )
}

export default Navbar