import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Container, Grid } from '@material-ui/core';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: ' Dr Gorav Gupta',
    about: 'Dr Gupta delivers treatment facilities for De Addiction, Depression, Eating Disorders, Bipolar Disorder, Schizophrenia, and personality disorder etc. '
  },
  {
    label: ' Dr Sameer Malhotra',
    about: 'Dr Sameer Malhotra is the director of the Mental Health Department at Max Super Speciality Hospital in New Delhi.'
  },
  {
    label: '  Dr Ajit Dandekar',
    about: 'Dr Ajit Dandekar is associated with Nanavati Super Speciality Hospital in Mumbai, where he works as a honorary psychiatrist.'
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    flexGrow: 1,

  },
  sliderContent1: {
    display: 'flex',
    alignItems: 'center',
    height: 300,
    borderRadius: '10px 10px 10px 0px',
    width: '50%',
    boxShadow:"5px 0px 0px 0px  #645bb5",
    marginLeft: '-32px',
    paddingLeft: theme.spacing(4),
    backgroundColor: '#867AE9',
  },
  sliderContent2: {
    display: 'flex',
    alignItems: 'center',
    height: 300,
    width: '100%',
    borderRadius: '10px 10px 0px 0px',
    paddingLeft: theme.spacing(4),
    backgroundColor: '#FFCEAD',
  },
}));

function Content() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Container maxWidth="xl" style={{ backgroundColor: '#d2d3ee', padding: '30px 0px 10px 0' }} align='center'>
      <div className={classes.root}>
        <Typography style={{paddingBottom:"20px"}} variant="h3">For you !!</Typography>
        <Grid container direction='row'>
          <Paper square className={classes.sliderContent2} >

            <Paper align="left" className={classes.sliderContent1}>
              <Typography align="center" style={{paddingLeft:'auto', color:'white'}} variant='h5'>{tutorialSteps[activeStep].label}</Typography>
            </Paper>

            <Typography style={{ width: '100%', padding:'0 20px 0 20px'}} variant='p'>{tutorialSteps[activeStep].about} <br />
            <Button href="/Group" variant="contained" color="primary" style={{borderRadius:'50px' ,marginTop:"60px"}} >
               Chat with them 
            </Button>
            </Typography>
           
          </Paper>
        </Grid>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step) => (
            <div key={step.label}>
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={3}
          style={{ borderRadius: '0px 0px 10px 10px', }}
          position="static"
          variant="dots"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    </Container>
  );
}

export default Content;
