import React from 'react'
import NavBar from '../Components/NavBar';
import { Typography } from '@mui/material';

function AuthPage() {
  return (
    <>
      <NavBar />
      <Typography
        variant="h1"
        align="center"
        sx={{ fontWeight: "bold", m: 30 }}
      >
        Auth Page
      </Typography>
    </>
  );
}

export default AuthPage