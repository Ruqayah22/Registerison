import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import {  Alert, AppBar, IconButton, Paper, Toolbar } from '@mui/material';

import HomeIcon from "@mui/icons-material/Home";
import axios from "axios";



const userURL = "http://localhost:5000";

const initialValue = {
  email: "",
  password: "",
};

function Login() {
  const [userLogin, setUserLogin] = useState(initialValue);
  
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();
  
  const onValueChange = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${userURL}/auth/login`, userLogin);
      const token = response.data.token;
      // console.log("Token:", response.data.token);
      if (response && response.data && response.data.token) {
        console.log("Login successful");
        // window.alert("Login successful!");
        setLoginSuccess(true);
        setLoginError("");
        navigate("/ok");
        window.location.reload();
        localStorage.setItem("token", token);
      } else {
        console.error("Login failed. No token received in the response.");
        // window.alert("Login failed. No token received in the response.");
        setLoginError("Email or Password is wrong");
        setLoginSuccess(false);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      //  window.alert("Login failed: " + error.message);
      setLoginError("Login failed: " + error.message);
      setLoginSuccess(false);
    }
    };

  return (
    <Container component="main" maxWidth="xs">
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
              onClick={() => navigate("/")}
              sx={{ mr: 2, background: "#494c52" }}
            >
              <HomeIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: 500,
            padding: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={userLogin.email}
              onChange={onValueChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={userLogin.password}
              onChange={onValueChange}
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {loginSuccess && (
              <Alert severity="success">Login Successfully</Alert>
            )}
            {loginError && <Alert severity="error">{loginError}</Alert>}

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to={"/register"} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;
