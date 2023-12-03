import React from "react";
import {
  Box,
  CssBaseline,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Button from "@mui/material/Button";
import Copyright from "./Copyrigth";
import { Link } from "react-router-dom";

const Register = (props) => {
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email");

    if (!isValidEmail(email)) {
      setEmailError("Incorrect email format");
      return;
    }

    console.log({
      email: data.get("email"),
      password: data.get("password"),
      age: age,
      gender: gender,
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
    });
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, mb: 2, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign UP
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="Last Name"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel id="Age">Select your age</InputLabel>
                    <Select
                      labelId="Age"
                      id="age"
                      value={age}
                      label="Select your age"
                      onChange={handleChangeAge}
                    >
                      <MenuItem value={"18-25"}>18-25</MenuItem>
                      <MenuItem value={"26-34"}>26-34</MenuItem>
                      <MenuItem value={"35-44"}>35-44</MenuItem>
                      <MenuItem value={"45-120"}>45-120</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel id="Gender">Select your gender</InputLabel>
                    <Select
                      labelId="gender"
                      id="gender"
                      value={gender}
                      label="Select your gender"
                      onChange={handleChangeGender}
                    >
                      <MenuItem value={"Female"}>Female</MenuItem>
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"I prefer not to select"}>
                        I prefer not to select
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                type="email"
                error={!!emailError}
                helperText={emailError || ""}
                onChange={(e) => {
                  setEmailError("");
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/login">Do you have an account? Sign in</Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

Register.propTypes = {};

export default Register;
