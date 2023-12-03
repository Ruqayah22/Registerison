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
import { AppBar, IconButton, Paper, Toolbar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
// import { login } from "../api/userApi";
// import Alert from "@mui/material/Alert";
import axios from "axios";

const userURL = "http://localhost:5000";

const initialValue = {
  email: "",
  password: "",
};

function Login() {
  const [userLogin, setUserLogin] = useState(initialValue);
  // const [loginSuccess, setLoginSuccess] = useState(false);
  // const [loginError, setLoginError] = useState(false);

  const onValueChange = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${userURL}/auth/login`, userLogin);
      
      console.log("Token:", response.data.token);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
    // await axios
    //   .post(`${userURL}/auth/login`, userLogin)
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err));
    // await login();
    // console.log(userLogin);
    // await login(userLogin.email, userLogin.password);
    // //  console.log(userLogin);
    // navigate("/ok");

    // try {
    //   const response = await login(userLogin.email, userLogin.password);
    //   if (response.success) {
    //     setLoginSuccess(true);
    //     setLoginError(false);
    //     // console.log("Login successful, navigating to /ok");
    //     navigate("/ok");
    //   } else {
    //     setLoginError(true);
    //     // setLoginSuccess(false);
    //     // console.error("Login failed: Email or Password Wrong");
    //   }
    // } catch (error) {
    //   console.error("Login failed:", error);
    //   // setLoginError(true);
    //   // setLoginSuccess(false);
    // }
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
            {/* {loginSuccess && (
              <Alert severity="success">Login Successfully</Alert>
            )}
            {loginError && (
              <Alert severity="error">Email or Password Wrong</Alert>
            )} */}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to={"/signup"} variant="body2">
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
