import React from "react";
import Navbar from "../Navbar";
import { Grid, Paper } from "@material-ui/core";

export default function AboutUs() {
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
            <h1 style={{ textDecoration: "underline" }}>About Us</h1>
          </Grid>
          <br />
          <br />
          <p style={{ fontSize: "20px" }}>
            This is all about this page and it is going to be amazing. Since we
            know that no one knows you better than your friends and family so we
            will connect with them as well to make sure you are doing great with
            the therapy. " Its your life live it 😊 " .Jan
          </p>
          <br />
          <br />
          <p style={{ fontSize: "20px" }}>
            Cure your mental illness by socializing with other people and also
            take suggestion and guidance from experts. Meet and take tips from
            people who have come across same condition and also take part in
            some fun and interactive sessions with other people.
          </p>
        </Paper>
      </Grid>
    </div>
  );
}
