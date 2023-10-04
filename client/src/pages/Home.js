import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import LoginIcon from "@mui/icons-material/Login";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";

function Home() {

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        style={{
          background: "none",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => navigate("login")}
            sx={{ mr: 2, background: "#494c52" }}
          >
            <LoginIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => navigate("signup")}
            sx={{ mr: 2, background: "#494c52" }}
          >
            <SensorOccupiedIcon />
          </IconButton>
        </Toolbar>
        
      </AppBar>
    </Box>
    
  );
}

export default Home