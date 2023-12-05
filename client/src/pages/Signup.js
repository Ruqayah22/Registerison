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
import { Alert, AppBar, IconButton, Paper, Toolbar } from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import { register } from "../api/userApi";


const initialValue = {
  name: "",
  email: "",
  password: "",
};


function Signup() {

  const [userSignup, setUserSignup] = useState(initialValue);
  
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(userSignup);
  //   navigate("/ok");
  // };

  const onValueChange = (e) => {
    setUserSignup({ ...userSignup, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Alert("Registration Successful");
    await register(userSignup);
    <Alert severity="success">Registration Successful</Alert>;
    navigate("/login");
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
             Sign up
           </Typography>
           <Box
             component="form"
             noValidate
             //  onSubmit={handleSubmit}
             sx={{ mt: 3 }}
           >
             <Grid container spacing={2}>
               <Grid item xs={12}>
                 <TextField
                   autoComplete="given-name"
                   name="name"
                   value={userSignup.name}
                   required
                   fullWidth
                   id="name"
                   label="Name"
                   onChange={(e) => onValueChange(e)}
                   autoFocus
                 />
               </Grid>
               <Grid item xs={12}>
                 <TextField
                   required
                   fullWidth
                   id="email"
                   label="Email Address"
                   name="email"
                   value={userSignup.email}
                   onChange={(e) => onValueChange(e)}
                   autoComplete="email"
                 />
               </Grid>
               <Grid item xs={12}>
                 <TextField
                   required
                   fullWidth
                   name="password"
                   label="Password"
                   type="password"
                   value={userSignup.password}
                   //  type={showPassword ? "text" : "password"}
                   //  handleShowPassword={handleShowPassword} //"password"
                   onChange={(e) => onValueChange(e)}
                   id="password"
                   autoComplete="new-password"
                 />
               </Grid>
               
             </Grid>
             <Button
               type="submit"
               fullWidth
               variant="contained"
               sx={{ mt: 3, mb: 2 }}
               onClick={handleSubmit}
             >
               Sign Up
             </Button>
             <Grid container justifyContent="flex-end">
               <Grid item>
                 <Link to={"/login"} variant="body2">
                   Already have an account? Sign in
                 </Link>
               </Grid>
             </Grid>
           </Box>
         </Paper>
       </Box>
     </Container>
   );
}

export default Signup