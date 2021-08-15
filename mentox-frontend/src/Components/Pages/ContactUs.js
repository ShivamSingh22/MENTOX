import React from "react";
import Navbar from "../Navbar";
import { Grid, Paper } from "@material-ui/core";

export default function ContactUs() {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 600,
    borderRadius: "20px",
    margin: "120px auto",
  };

  return (
    <div
      style={{
        backgroundColor: "#d2d3ee",
        height: "100%",
        paddingBottom: "20px",
      }}
    >
      <Navbar />
      <Grid style={{ height: "100%" }}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <br />
            <h1 style={{ textDecoration: "underline" }}>Contact Us</h1>
          </Grid>
          <br />
          <br />
          <p style={{ fontSize: "20px" }}>
           <h3>Prashat Dhiman</h3><br />
          <p> Github-- https://github.com/Prashant142</p><br />
          <p>LinkedIn- https://www.linkedin.com/in/prashant-dhiman-53233817a/ </p>
          </p>
          <br />
          <br />
          <p style={{ fontSize: "20px" }}>
           <h3>Shivam Singh</h3><br />
          <p> Github-- https://github.com/ShivamSingh22</p><br />
          <p>LinkedIn-https://www.linkedin.com/in/shivam-singh-73348a196/ </p>
          </p>
          <p style={{ fontSize: "20px" }}>
           <h3>Vishal DA</h3><br />
          <p> Github-- https://github.com/VDA-001/</p><br />
          <p>LinkedIn- https://www.linkedin.com/in/vishal-da-9216091a9/ </p>
          </p>
        
        </Paper>
      </Grid>
    </div>
  );
}
