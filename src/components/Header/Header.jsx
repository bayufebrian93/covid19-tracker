import React from 'react';
import { AppBar, Toolbar, makeStyles, IconButton, Badge, Link } from '@material-ui/core';
import  { Public }  from '@material-ui/icons';
import logo from '../../images/covid-19.svg';
import styles from './Header.module.css'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: 'center',
    borderBottom: '1px solid #EF603F',

    [theme.breakpoints.up('sm')]: {
      minHeight: '90px'
    },
  },
  toolbarNav: {
    justifyContent: 'center',
    borderBottom: '1px solid #EF603F',

    [theme.breakpoints.up('sm')]: {
      minHeight: '60px'
    },
  },
  toolbarLink: {
    padding: theme.spacing(0, 3),
    flexShrink: 0,
    fontSize: 16,
    fontWeight: 300
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar elevation={0}  position="relative" color="transparent">
      <Toolbar className={classes.toolbar}>
        <img src={logo} className={styles.logo} alt="logo"/>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarNav}>
        <div className={classes.sectionDesktop}>
          <Link
            color="inherit"
            noWrap
            variant="body2"
            href="#"
            className={classes.toolbarLink}
          >
            Global
          </Link>
          <Link
            color="inherit"
            noWrap
            variant="body2"
            href="#"
            className={classes.toolbarLink}
          >
            Regional
          </Link>
          <Link
            color="inherit"
            noWrap
            variant="body2"
            href="#"
            className={classes.toolbarLink}
          >
            Support
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header;