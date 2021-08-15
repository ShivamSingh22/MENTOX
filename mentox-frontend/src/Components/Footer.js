import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#49417a',
    color: 'white'
  },
  heading: {
    fontSize: 30,
    paddingTop: 50
  },
  about: {
    fontSize: 20,
    paddingTop: 40,
  },
  links: {
    fontSize: 20,
    paddingTop: 40,
    paddingBottom:10

  },
  content: {
    color: 'white',
    textDecoration: 'none',
  }
}));

export default function Footer() {
  const classes = useStyles();

  const year = new Date().getFullYear();

  return (
    <div style={{ height: "100%", width: "100%" }} className={classes.root}>
      <Grid container >
        <Grid item xs={12} lg={6}>
          <Typography className={classes.heading} variant="h4" align="center">
            <Link to='/Home' className={classes.content}>
              MENTOX  <i class="fas fa-brain"></i>
            </Link>
          </Typography>
          <Typography style={{ marginTop: "20px" }} align="center">
            This website is all about the mental health and meditation.
          </Typography>
          <Typography align="center" style={{ padding: "40px 0 30px 0" }}>
            <FacebookIcon style={{ marginRight: "30px" }} />
            <InstagramIcon style={{ marginRight: "30px" }} />
            <a href='https://github.com/ShivamSingh22/MENTOX' target="_blank"> <GithubIcon style={{ marginRight: "30px", color: 'white' }} /></a>
            <LinkedinIcon />
          </Typography>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Typography style={{ paddingBottom: '10px' }} className={classes.about} align='center' variant="h4">
            <Link style={{textDecoration:'none' , color:'white'}} to='/About-us'>About Us</Link>
          </Typography>
          <Typography align='center' variant="caption">
            This is all about this page and it is going to be amazing. Since we know that no one knows you better than your friends and family so we will connect with them as well to make sure you are doing great with the therapy. " Its your life live it 😊  " .Jan
          </Typography>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Typography className={classes.links} align='center' variant="h4">
            <Link to='/Contact-us' className={classes.content}>Contact Us</Link>
          </Typography>
          <Typography className={classes.links} align='center' variant="h4">
            <a href="https://github.com/ShivamSingh22/MENTOX" target="_blank" className={classes.content}>Our Repository</a>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{
              backgroundColor: "#58527C",
              padding: "0.8rem 0 0.8rem 0",
              overflow: "hidden",
              color: 'white'
            }}
            align="center"
          >
            Copytight © {year} | MENTOX
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
