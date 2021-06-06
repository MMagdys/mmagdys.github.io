import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';

import Divider from '@material-ui/core/Divider';


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


export default function ResearchInterst() {

	const classes = useStyles();

  return (
    <div id="research" style={{padding: '2rem', backgroundColor: '#aaa8a6'}} align="center">

        <Typography component="h1" variant="h3" color="primary" style={{color: '#4f5984'}}>
            Research Interest
        </Typography>
        <Divider style={{width: "32px", backgroundColor: '#121b3e', marginBottom: '24px', height: '5px'}} />


        <div align="left" style={{paddingTop: '1rem'}}>
        <Grid container spacing={0} style={{paddingLeft: '2rem', paddingRight: '2rem'}}>

            <Grid item sm={4} offset={1} style={{paddingRight: '4rem'}}>
                <ul>
                    <li><Typography variant="subtitle2" color="inherit" paragraph style={{fontSize: '16px' }} >
                        Applied Cryptography
                    </Typography></li>
                    <li><Typography variant="subtitle2" color="inherit" paragraph style={{fontSize: '16px' }} >
                        Blockchains
                    </Typography></li>
                    <li><Typography variant="subtitle2" color="inherit" paragraph style={{fontSize: '16px' }} >
                        Secure Computations
                    </Typography></li>
                </ul>
            </Grid>

            <Grid item sm={4} style={{paddingLeft: '4 rem'}}>
                <ul>
                    <li><Typography variant="subtitle2" color="inherit" paragraph style={{fontSize: '16px' }} >
                        Zero Knowledge Proofs
                    </Typography></li>
                    <li> <Typography variant="body2" color="inherit" paragraph style={{fontSize: '16px' }} >
                        Distributed Systems
                    </Typography></li>
                    <li> <Typography variant="body2" color="inherit" paragraph style={{fontSize: '16px' }} >
                        Peer-to-Peer Networks
                    </Typography></li>
                </ul> 
            </Grid>

            <Grid item sm={4} style={{paddingLeft: '4 rem'}}>
                <ul>
                    <li> <Typography variant="body2" color="inherit" paragraph style={{fontSize: '16px' }} >
                        Cloud Security
                    </Typography></li>
                    <li> <Typography variant="body2" color="inherit" paragraph style={{fontSize: '16px' }} >
                        Web Security
                    </Typography></li>
                    <li> <Typography variant="body2" color="inherit" paragraph style={{fontSize: '16px' }} >
                        Malware Analysis
                    </Typography></li>
                </ul>
            </Grid>

        </Grid>
        </div>
    </div>
  );
}