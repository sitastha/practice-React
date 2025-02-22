import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'

import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    menuItem: {        
        color: 'white',
        textDecoration:'none',

    }
  }));

const Navbar = () => {
    const classes =  useStyles();
    return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    NOBO
                    </Typography>
                    <Link to={'/'} color="inherit" className={classes.menuItem}>HOME</Link>
                </Toolbar>
            </AppBar>
    );
}

export default Navbar;
