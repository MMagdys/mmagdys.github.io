import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import SchoolIcon from '@material-ui/icons/School';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles((theme) => ({
  mainHeader: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    // marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(17,24,31,.7)',
  },
  mainHeaderContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
    },
    
  },
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttonLink: {
      textDecoration: 'none',
      color: 'white',
  },
   margin: {
    margin: theme.spacing(1),
  },
  navButton: {
    color: "white", 
    border: '2px solid white',
    margin: theme.spacing(1),
  },
}));


export default function Home() {

	const classes = useStyles();

  return (
    <div id="about" style={{padding: '2rem', backgroundColor: '#f4f4f4'}} align="center">

        <Typography component="h1" variant="h3" color="primary" style={{color: '#7090cb'}}>
                    About
        </Typography>
        <Divider style={{width: "32px", backgroundColor: '#121b3e', marginBottom: '24px', height: '5px'}} />


        <div align="left" style={{paddingTop: '1rem'}}>
        <Grid container spacing={0} style={{paddingLeft: '2rem', paddingRight: '2rem'}}>

            <Grid item sm={6} offset={1} style={{paddingRight: '4rem'}}>
                <Typography component="h4" variant="h4" color="primary" gutterBottom style={{color: '#121b3e', fontSize: '32px'}}>
                    Hi, I am Muhammad
                </Typography>
                {/* <Divider style={{width: "40%", backgroundColor: 'grey', marginBottom: '24px'}} /> */}
                <ul>
                    <li><Typography variant="subtitle2" color="inherit" paragraph style={{fontSize: '16px' }} >
                        Researcher at IoT and Cybersecurity lab, VT-MENA, Alexandria Univeristy
                    </Typography></li>
                </ul>

                {/* <Typography variant="subtitle2" color="inherit" paragraph style={{fontSize: '16px' }} >
                I am eager to work on privacy-preserving, decentralized, and distributed systems.
I would like to work on secure computation especially in decentralized applications
                </Typography> */}

                <div style={{marginTop: '2rem'}}>
                  <Typography component="h1" variant="h4" color="primary" gutterBottom style={{color: '#121b3e', fontSize: '32px'}}>
                      Honors & Awards
                  </Typography>
                  <ul>
                      <li> <Typography variant="body2" color="inherit" paragraph style={{fontSize: '16px' }} >
                      Second Place, <b>Egypt National Cyber Security CTF 2018</b>
                      </Typography></li>
                      <li> <Typography variant="body2" color="inherit" paragraph style={{fontSize: '16px' }} >
                      Fifth Place, <b> Arab Regional Cyber Security CTF 2018</b>
                      </Typography></li>
                  </ul>
                </div>
            </Grid>

            <Grid item sm={6} style={{paddingLeft: '4 rem'}}>
                <Typography component="h1" variant="h4" color="primary" gutterBottom style={{color: '#121b3e', fontSize: '32px'}}>
                    Education
                </Typography>
                {/* <Divider style={{width: "40%", backgroundColor: 'grey', marginBottom: '24px'}} /> */}
                <ul>
                    <li> <Typography variant="body2" color="inherit" paragraph style={{fontSize: '16px' }} >
                    B.Sc <b>Computer & Communications Engineering</b>, Alexandria University, Egypt
                </Typography></li>
                </ul>
                
                <div style={{marginTop: '2rem'}}>
                  <Typography component="h1" variant="h4" color="primary" gutterBottom style={{color: '#121b3e', fontSize: '32px'}}>
                      Certificate
                  </Typography>
                  {/* <Divider style={{width: "40%", backgroundColor: 'grey', marginBottom: '24px'}} /> */}
                  <ul>
                      <li> <Typography variant="body2" color="inherit" paragraph style={{fontSize: '16px' }} >
                        Nano-degree <b>Deep Learning</b>, Udacity
                      </Typography></li>
                  </ul>
                </div>
            </Grid>

        </Grid>
        </div>
    </div>
  );
}