import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import SchoolIcon from '@material-ui/icons/School';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles((theme) => ({
  buttonLink: {
      textDecoration: 'none'
  },
  buttonLink: {
    color: 'white',
  },
  paper: {
    backgroundColor: '#121b3e', 
    padding: '1rem', 
    color: 'white'
  }
}));


export default function ButtonAppBar() {
  
  const classes = useStyles();

  return (
    <div align="center">
      <Paper className={classes.paper}>
        <a target="_blank" href="https://github.com/mmagdys">
          <IconButton aria-label="Google Scholar" className={classes.buttonLink}>
            <GitHubIcon fontSize="large" />
          </IconButton>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/muhammadmsayed/">
          <IconButton aria-label="Google Scholar" className={classes.buttonLink}>
            <LinkedInIcon fontSize="large"/>
          </IconButton>
        </a>
        <a target="_blank" href="https://scholar.google.com/citations?user=LRPkbakAAAAJ&hl=en">
          <IconButton aria-label="Google Scholar" className={classes.buttonLink}>
            <SchoolIcon fontSize="large"/>
          </IconButton>
        </a>

        <Typography variant="subtitle2" gutterBottom>
        Copyright © {new Date().getFullYear()} - mmagdys.me
      </Typography>
      </Paper>
    </div>
  );
}
