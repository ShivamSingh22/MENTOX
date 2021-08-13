import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Avatar, Button, Typography } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';


const avatarStyle = { backgroundColor: "#rgb777" };
const useStyles = makeStyles((theme) => ({
    root: {

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50vh'
        }
    },
    container: {
        margin: '15vh 0 20vh 0',
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
        <div align="center">
            <Paper className={classes.container} elevation={10} >
                <Avatar style={avatarStyle, { marginTop: '10px' }}>
                    <AccountCircleIcon />
                </Avatar>
                <h2 style={{ margin: '10px 0 30px 0' }}>Sign Up</h2>

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
                    <Button style={{ width: "100%", marginTop: '20px' }} variant="contained" color="primary">
                        Sign Up
                    </Button>
                    <Typography style={{marginTop:'10px'}}>
                        {" "}
                        Instead want to go back ?{" "}
                        <Link to="/Home">Home</Link>
                    </Typography>
                </form>
            </Paper>
        </div>
    );
}
