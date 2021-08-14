import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { register } from "../../../helper/authHelper";
import { Redirect } from "react-router";

const projectID = "439b20aa-7e65-4108-a931-ca50d084f14d";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export function SimpleModal() {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 480,
    margin: "50px auto",
  };

  const avatarStyle = { backgroundColor: "#rgb777" };

  const btnstyle = { margin: "8px 0" };
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
    didRedirect: false,
  });

  const { username, password } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values });
    //Check if all fields are filled
    if (username === "" || password === "") {
      setValues({
        ...values,
      });
    } else {
      register({ username, password })
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
      return <Redirect to="/" />;
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div
      style={(modalStyle, { width: "auto", top: "7%", left: "30%" })}
      className={classes.paper}
    >
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <br />
            <h2>Create Account</h2>
          </Grid>
          <br />
          <br />
          <TextField
            label="Username"
            placeholder="Enter username"
            type="text"
            fullWidth
            value={username}
            required
            onChange={handleChange("username")}
          />
          <br />
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
            onClick={onSubmit}
            fullWidth
          >
            Create Account
          </Button>
          <br />
          <br />

          <Typography align="center">
            {" "}
            <span>Creation of account might take while to process</span>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );

  return (
    <div>
      {performRedirect()}
      <div align="center">
        <button type="submit" className="button" onClick={handleOpen}>
          <span>Create Account </span>
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (error) {
      setError("Oops, incorrect credentials.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <div className="form">
          <h1 className="title">MENTOX Chat Application</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              placeholder="Username"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Password"
              required
            />
            <div align="center">
              <button type="submit" className="button">
                <span>Chat/Interact for a better Mental Health </span>
              </button>
            </div>
            <h2 className="error">{error}</h2>
          </form>
          <h2 align="center" style={{ color: "white" }}>
            OR
          </h2>
          <SimpleModal />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
