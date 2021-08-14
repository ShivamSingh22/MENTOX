import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Avatar, Button, Typography } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { Form } from "../../helper/formHelper";
import { Redirect } from "react-router";

const avatarStyle = { backgroundColor: "#rgb777" };
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50vh",
    },
  },
  container: {
    margin: "15vh 20vh 20vh 20vh",
    width: "auto",
    alignSelf: "center",
    height: "100%",
    padding: "10px 30px 30px 30px",
    backgroundColor: "#cec3db",
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [values, setValues] = useState({
    email: "",
    name: "",
    phone: "",
    age: "",
    address: "",
    description: "",
    health: "",
    didRedirect: false,
  });

  const { email, name, phone, age, address, description, health } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values });
    //Check if all fields are filled
    if (email === "" || name === "" || age === "" || description === "") {
      setValues({
        ...values,
      });
    } else {
      Form({ email, name, age, description, phone, address, health })
        .then((data) => {
          if (data) {
            setValues({
              ...values,
              didRedirect: true,
            });
          } else {
            setValues({ ...values });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  //Performing redirect after successfull login
  const performRedirect = () => {
    if (values.didRedirect) {
      return <Redirect to="/Group" />;
    }
  };

  return (
    <div align="center">
      {performRedirect()}
      <Paper className={classes.container} elevation={10}>
        <Avatar style={(avatarStyle, { marginTop: "10px" })}>
          <AccountCircleIcon />
        </Avatar>
        <h2 style={{ margin: "10px 0 30px 0" }}>Sign Up</h2>

        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          align="center"
        >
          <Grid lg={3}>
            <TextField
              required
              id="outlined-required"
              label="Full Name"
              variant="outlined"
              value={name}
              onChange={handleChange("name")}
            />

            <TextField
              id="outlined-input"
              label="Email"
              type="email"
              autoComplete="email"
              variant="outlined"
              required
              value={email}
              onChange={handleChange("email")}
            />
            <TextField
              id="outlined-number"
              label="Contact Number"
              type="numbers"
              variant="outlined"
              required
              value={phone}
              onChange={handleChange("phone")}
            />
            <TextField
              id="outlined-number"
              label="Enter your age"
              type="numbers"
              variant="outlined"
              required
              value={age}
              onChange={handleChange("age")}
            />
            <TextField
              id="outlined-full-width"
              label="Address"
              style={{ width: "86vh" }}
              placeholder="Address"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              required
              value={address}
              onChange={handleChange("address")}
            />
            <TextField
              id="outlined-full-width"
              label="Describe your issue"
              style={{ marginTop: 20, width: "86vh" }}
              placeholder="About your problem"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              required
              value={description}
              onChange={handleChange("description")}
            />
            <TextField
              required
              id="outlined-required"
              label="Any previous medical issues"
              variant="outlined"
              value={health}
              onChange={handleChange("health")}
            />
          </Grid>
          <Button
            style={{ width: "100%", marginTop: "20px" }}
            variant="contained"
            color="primary"
            onClick={onSubmit}
          >
            Register
          </Button>
          <Typography style={{ marginTop: "10px" }}>
            {" "}
            Instead want to go back ? <Link to="/Home">Home</Link>
          </Typography>
        </form>
      </Paper>
    </div>
  );
}
