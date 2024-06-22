import {
  AppBar,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Login } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import logo from "../assets/images/logo.png";
import { useEffect } from "react";

function Register() {


  let navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: null,
    email: null,
    password: null,
    role: "Lecturer",
    state: "ACTIVE",
    username: null,
  })

  const [showDiv, setShowDiv] = useState(false);

  const handleButtonClick = () => {
    setShowDiv(!showDiv);
  }

  const handleOnChangeName = (event) => {
    setUserInfo({
      ...userInfo,
      name: event.target.value,
    })
  }

  const handleOnChangeEmail = (event) => {
    setUserInfo({
      ...userInfo,
      email: event.target.value,
    })
  }

  const handleOnChangePassword = (event) => {

    setUserInfo({
      ...userInfo,
      password: event.target.value,
    })
  }
  // const handleOnChangeRole = (event) => {
  //   setUserInfo({
  //     ...userInfo,
  //     role: event.target.value,
  //   })
  // }


  const handleOnChangeUsername = (event) => {
    setUserInfo({
      ...userInfo,
      username: event.target.value,
    })
  }

  const [formErrors, setFormErrors] = useState({});

  const validate = () => {
    const errors = {};
  if (!userInfo.name) {
    errors.name = 'Name is required';
  }

  if (!userInfo.username) {
    errors.username = 'Username is required';
  }

  if (!userInfo.password) {
    errors.password = 'Password is required';
  }


  if (!userInfo.email) {
    errors.email = 'Email Address is required';
  } else if (!/\S+@\S+\.\S+/.test(userInfo.email)) {
    errors.email = 'Email Address is invalid';
  }

  return errors;
};

  // const [asStudent, setAsStudent] = useState(false);

  //   const togglePasswordVisibility = () => {
  //     setAsStudent(!asStudent);
  //   };

  const saveUser = () => {
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
    const data = {
      name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
        role: 'Student',
        state: userInfo.state,
        username: userInfo.username
    }
    axios
    .post("http://localhost:3001/api/signup",{
      data: data
  })
    .then((res) => {
      // setCourses(res.data);
      // setCourses(res.data);
      console.log(res.data); 
      // if(res.data != null){
      //   navigate("/login", { replace: true });
      //   // localStorage.setItem("userType",res.data[0].role);
      // }
      // else{
      //   if(res.msg!=null)
      //   alert("res.msg");
      // }
      if (res.data && res.data.msg) {
        alert(res.data.msg);
      } else if (res.data && res.data.email) {
        navigate("/login", { replace: true });
      } else {
        alert("Unexpected response from the server.");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }
  

    // axios
    //   .post("http://localhost:8080/api/v1/user/saveUser", {
    //     name: userInfo.name,
    //     email: userInfo.email,
    //     password: userInfo.password,
    //     // role: userInfo.role,
    //     role: 'Student',
    //     state: userInfo.state,
    //     username: userInfo.username,
    //   })
    //   .then((res) => {
    //     // setCourses(res.data);
    //     // setName(res.data);
    //     console.log(res.data);
    //     navigate("/login")
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  //select
  // const [Role, setAge] = React.useState("");
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  //return
  return (



    <div align="center">

      <Paper >
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit" component="div">
              <h2>EDULEARN</h2>
            </Typography>
          </Toolbar>
        </AppBar>


        <Grid container spacing={2} style={{ marginBottom: '-80px' }}>
          <Grid item xs={12} md={6}>
            <img
              alignItems="center"
              alt="HomePage"
              width="100%"
              height="90%"
              sx={{ mt: "2vw" }}
              src={
                "https://www.paatham.in/assets/images/website-image/E%20Learning.webp"
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>

            <div>
              <Box sx={{ "& > :not(style)": { m: 1, width: "10vw" }, marginTop: '10px' }}>
                <Link to="/TeachOnEduLearn"><Button variant="contained" >Register As Teacher </Button> </Link>
                {/* <Button variant="contained"  onClick={handleButtonClick}>As Student </Button> */}
              </Box>
            </div>

            {/* <div  style={{display: showDiv ? 'block': 'none'}}> */}
            <div>
              <Box

                component="form"
                sx={{ "& > :not(style)": { m: 1, width: "30vw" } }}
                noValidate
                autoComplete="off"
              >


                {/* <TextField id="userId" label="User Id" variant="outlined" /> */}
                <TextField id="name" onChange={handleOnChangeName} value={userInfo.name}  error={formErrors.name}
                            helperText={formErrors.name} label="Name" variant="outlined" />
                <TextField id="email" onChange={handleOnChangeEmail} value={userInfo.email} error={formErrors.email}
                            helperText={formErrors.email} label="Email" variant="outlined" />
                <TextField id="username" onChange={handleOnChangeUsername} value={userInfo.username}  error={formErrors.username}
                            helperText={formErrors.username} label="Username" variant="outlined" />


                {/* Password */}
                <TextField
                  onChange={handleOnChangePassword} value={userInfo.password}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  error={formErrors.password}
                  helperText={formErrors.password}
                  autoComplete="new-password"
                  
                />

                {/* <TextField
                required
                fullWidth
                name="cPassword"
                label="Confirm Password"
                type="password"
                id="cpassword"
                autoComplete="new-password"
              /> */}

                {/* <FormControl fullWidth>
                  <InputLabel id="role">Role</InputLabel>
                  <Select
                    // onChange={handleOnChangeRole} 
                    value={userInfo.role}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={Role}
                    label="Role"
                  // onChange={handleChange}
                  >
                    <MenuItem value={"Student"}>Student</MenuItem>
                    <MenuItem value={"Lecturer"}>Lecturer</MenuItem>
                  </Select>
                </FormControl> */}

                <Button variant="contained" onClick={saveUser}>Register</Button>
              </Box>

              <Box m={4}>
                <Typography align="center">
                  Already Registered?<Link to={"/login"}>Sign In</Link>
                </Typography>
              </Box>
            </div>
          </Grid>
        </Grid>



        <footer><AppBar position="sticky" color="primary" style={{ marginBottom: '-100px' }} >
          <Toolbar>
            <Typography color="inherit" component="div">
              Copyright © 2022. All rights reserved.
            </Typography>
          </Toolbar>
        </AppBar></footer>
      </Paper>

    </div>
  );
}

export default Register;
