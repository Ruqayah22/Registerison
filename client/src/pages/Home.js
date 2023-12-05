import { Typography } from '@mui/material';
import React from 'react'
import NavBar from '../Components/NavBar';

function Home() {

  return (
    <>
      <NavBar />
      <Typography
        variant="h1"
        align="center"
        sx={{ fontWeight: "bold", m: 30 }}
      >
        Home Page
      </Typography>
    </>
  );
}

export default Home