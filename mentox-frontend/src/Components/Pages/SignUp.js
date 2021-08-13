import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50vh',
        }
    },
    container: {
        marginTop:'',
        width: '100vh',
        alignSelf: 'center',
        height: '100%',
        padding: '10px 30px 30px 30px'
    },
}));

export default function SignUp() {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const classes = useStyles();

    return (
        <div align="center" style={{ backgroundColor:'#87a8a4'}}>
            <Paper className={classes.container}  elevation={24} >

                <Typography variant="h2" align='left' styl={{ marginBottom: '20px' }} >Sign Up</Typography>

                <form className={classes.root} noValidate autoComplete="off" align='center'>
                    <Grid lg={3} >
                        <TextField
                            required
                            id="outlined-required"
                            label="Full Name"
                            variant="outlined"
                        />
                        <TextField
                            password
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Confirm Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Choose a User Name"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-input"
                            label="Email"
                            type="email"
                            autoComplete="email"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-number"
                            label="Contact Number"
                            type="numbers"
                            variant="outlined"
                        />
                        <FormControl style={{ marginTop: '10px', marginBottom: '15px' }} component="fieldset" className={classes.radio}>
                            <FormLabel component="legend">Your age group ?</FormLabel>
                            <RadioGroup aria-label="Age" name="Age" value={value} onChange={handleChange}>
                                <FormControlLabel value="18-29" control={<Radio />} label="18-29" />
                                <FormControlLabel value="30-44" control={<Radio />} label="30-44" />
                                <FormControlLabel value="45-65" control={<Radio />} label="45-65" />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            id="outlined-full-width"
                            label="Required *"
                            style={{ width: '86vh' }}
                            placeholder="Address"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <TextField

                            id="outlined-full-width"
                            label="Required *"
                            style={{ marginTop: 20, width: '86vh' }}
                            placeholder="About You"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />

                    </Grid>
                    <Button style={{width:"50vh", marginTop:'20px'}} variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </Paper>
        </div>
    );
}
