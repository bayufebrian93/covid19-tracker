import React from 'react';
import { Typography, Link, makeStyles, Container } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        KrincingWesi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0, 6),
    // borderTop: '1px solid #EF603F'
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          COVID - 19
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Lorem Ipsum Dollor
        </Typography>
        <Copyright />
      </Container>
    </footer>
  )
}

export default Footer;