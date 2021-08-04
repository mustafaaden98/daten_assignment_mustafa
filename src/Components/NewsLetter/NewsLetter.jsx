import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container:{
        display:"flex",
        alignItems:'center',
        justifyContent:'center'
    },
    fields:{
        margin: '10px',
        padding: '10px',
        border:' 1px solid black'
    },
    formRow:{
        display:'flex',
        alignItems:'start',
        justifyContent:'center',
        margin: '10px 0px'
    }
})

const NewsLetter = () => {
    const classes = useStyles();
    const [email, setEmail] = useState({
        value: '',
        error: ''
    });
    const _onChange = (e) => {
        const { value } = e.target;
        const emailRegEx = /.+\@.+\..+/;
        if (!emailRegEx.test(value)) {
            setEmail({
                value,
                error: "Please enter a valid email"
            })
        } else {
            setEmail({
                value,
                error: ''
            })
        }
    }
    return (
        <div className = {classes.container}>
            <div className = {classes.fields}>
                <div style = {{display:'flex', justifyContent:'center'}}>
                    <h3>SIGN UP TO THE ADENWALA CLUB</h3>
                </div>
                <span>Join now and recieve a $20 sign up reward to spen on your next purchase</span>
                <div className = {classes.formRow}>
                    <TextField
                        required
                        label="E-mail"
                        type="email"
                        onChange={_onChange}
                        error={email.error}
                        helperText={email.error}
                    />
                    <div style = {{marginLeft:'10px'}}>
                    <Button variant="contained" color="primary" disabled = {email.error || !email.value}>
                    Register
                </Button>
                    </div>

                </div>

            </div>
        </div>
    )
};

export default NewsLetter;