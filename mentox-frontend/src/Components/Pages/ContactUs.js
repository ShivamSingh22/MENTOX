import React from "react";
import Navbar from "../Navbar";
import { Grid, Paper } from "@material-ui/core";

export default function ContactUs() {
  const paperStyle = {
    padding: 20,
    height: "85vh",
    width: 600,
    borderRadius: "20px",
    margin: "120px auto",
  };

  return (
    <div

      style={{
        backgroundColor: "#d2d3ee",
        paddingBottom: "20px",
      }}
    >
      <Navbar />
      <Grid style={{ height: "100%" }}>
        <Paper style={{ height: "100vh" }} elevation={10} style={paperStyle}>
          <Grid align="center">
            <br />
            <h1 style={{ textDecoration: "underline" }}>Contact Us</h1>
          </Grid>
          <br />
          <br />
          <p style={{ fontSize: "20px" }}>
            <h3>Prashat Dhiman</h3><br />
            <a style={{ textDecoration: 'none', color: 'darkgrey' }} href='https://github.com/Prashant142'> Github - https://github.com/Prashant142</a><br />
            <a style={{ textDecoration: 'none', color: 'darkgrey' }} href='https://www.linkedin.com/in/prashant-dhiman-53233817a'>LinkedIn - https://www.linkedin.com/in/prashant-dhiman-53233817a/ </a>
          </p>
          <br />
          <br />
          <p style={{ fontSize: "20px" ,paddingBottom:'50px'}}>
            <h3>Shivam Singh</h3><br />
            <a style={{ textDecoration: 'none', color: 'darkgrey' }} href='https://github.com/ShivamSingh22'> Github - https://github.com/ShivamSingh22</a><br />
            <a style={{ textDecoration: 'none', color: 'darkgrey' }} href='https://www.linkedin.com/in/shivam-singh-73348a196/'>LinkedIn - https://www.linkedin.com/in/shivam-singh-73348a196/ </a>
          </p>
          <p style={{ fontSize: "20px" }}>
            <h3>Vishal DA</h3><br />
            <a style={{ textDecoration: 'none', color: 'darkgrey' }} href='https://github.com/VDA-001/'> Github - https://github.com/VDA-001/</a><br />
            <a style={{ textDecoration: 'none', color: 'darkgrey' }} href='https://www.linkedin.com/in/vishal-da-9216091a9/'> LinkedIn - https://www.linkedin.com/in/vishal-da-9216091a9/ </a>
          </p>

        </Paper>
      </Grid>
    </div>
  );
}
