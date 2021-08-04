import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2)
    },
    toolBar:{
        justifyContent: 'space-between'
    },
    link:{
        color:'#ffff',
        margin: '0px 10px',
        cursor:'pointer'
    }
}))



const Header = (props) => {
    const classes = useStyles();
    let history = useHistory();
    const _onHomeClick = () =>{
        history.push('/')
    }
    const _onAboutClick = () =>{
        history.push('/about')
    }
    const _onWhatWeDoClick = () =>{
        history.push('/what-we-do')
    }
    const _onSignupNewsLetter = () => {
        history.push('/sign-uo-news')
    }
    const _onContactUs = () => {
        history.push('/contact-us')
    }
    
    return(
            <AppBar style = {{position:'sticky', top:'0'}}>
                <Toolbar className = {classes.toolBar}>
                <div>
                    <Link onClick = {_onHomeClick} className = {classes.link}>Home</Link>
                    <Link onClick = {_onAboutClick} className = {classes.link}>About Us</Link>
                    <Link onClick = {_onContactUs} className = {classes.link}>Contact Us</Link>
                    <Link onClick = {_onWhatWeDoClick}className = {classes.link}>What we do</Link>
                    <Link onClick = {_onSignupNewsLetter}className = {classes.link}>Signup for News letter</Link>
                    </div>
                <div>
                <Typography  variant="h6" noWrap>
                    MustafaAdenwala.com
                </Typography>
                </div>

                </Toolbar>

            </AppBar>
    )
}

export default Header;