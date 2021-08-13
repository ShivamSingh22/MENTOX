import React, { useState } from "react";
import { Redirect } from "react-router";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Container } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { signin, Authenticat, IsAuthenticated } from "../helper/authHelper";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
    error: "",
    success: false,
    didRedirect: false,
  });

  const { email, username, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  //Function to handle login
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    //Check if all fields are filled
    if (email === "" || username === "" || password === "") {
      setValues({
        ...values,
        error: "Please fill in all the details",
      });
    } else {
      signin({ email, username, password })
        .then((data) => {
          if (data.token) {
            //Setting up the jwt in localstorage
            Authenticat(data, () => {
              console.log("Tokken added");
              setValues({
                ...values,
                didRedirect: true,
              });
            });
          } else {
            console.log("dataerroer");
            setValues({ ...values, error: "Something went wrong" });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  //Display success message using state variable
  const successMessage = () => {
    return (
      <div style={{ display: success ? "" : "none" }}>
        New account created successfully
      </div>
    );
  };

  //Display error message using state variable
  const errorMessage = () => {
    return (
      <Container>
        <Alert variant={"danger"} style={{ display: error ? "" : "none" }}>
          {error}
        </Alert>
      </Container>
    );
  };

  //Performing redirect after successfull login
  const performRedirect = () => {
    if (IsAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 480,
    margin: "50px auto",
  };

  const avatarStyle = { backgroundColor: "#rgb777" };

  const btnstyle = { margin: "8px 0" };

  return (
    <>
      {successMessage()}
      {errorMessage()}
      {performRedirect()}
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Log In</h2>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            value={username}
            required
            onChange={handleChange("username")}
          />
          <TextField
            label="Email"
            placeholder="Enter email"
            type="email"
            fullWidth
            required
            value={email}
            onChange={handleChange("email")}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            value={password}
            required
            onChange={handleChange("password")}
          />
          <br />
          <br />
          <br />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={onSubmit}
          >
            Sign in
          </Button>
          <br />
          <br />

          <Typography>
            {" "}
            Do you have an account?{" "}
            <Link style={{ fontSize: 20 }} href="#">
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;
