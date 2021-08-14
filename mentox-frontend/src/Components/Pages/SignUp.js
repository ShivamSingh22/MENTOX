import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Avatar, Button, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';


const avatarStyle = { backgroundColor: "#rgb777" };
const useStyles = makeStyles((theme) => ({
    root: {

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '40vh',
            flexWrap: 'warp'
        }
    },
    container: {
        margin: '10vh 0 10vh 0',
        width: '60vh',
        alignSelf: 'center',
        height: '100%',
        padding: '10px 60px 60px 60px',
        backgroundColor: '#cec3db'
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
                    <Grid xs={3} lg={3} xl={12} >
                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            label="Full Name"
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            label="Choose a User Name"
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            id="outlined-input"
                            label="Email"
                            type="email"
                            autoComplete="email"
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            id="outlined-number"
                            label="Contact Number"
                            type="numbers"
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            id="outlined-number"
                            label="Enter your age"
                            type="numbers"
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            id="outlined-full-width"
                            label="Required *"
                            // style={{ width: '86vh' }}
                            placeholder="Address"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            id="outlined-full-width"
                            label="Required *"
                            // style={{ marginTop: 20, width: '86vh' }}
                            placeholder="About You"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                        />

                    </Grid>
                    <Button  style={{ width: "100%", marginTop: '20px' }}variant="contained" color="primary">
                        Register
                    </Button>
                    <Typography style={{ marginTop: '10px' }}>
                        {" "}
                        Instead want to go back ?{" "}
                        <Link to="/Home">Home</Link>
                    </Typography>
                </form>
            </Paper>
        </div>
    );
}
