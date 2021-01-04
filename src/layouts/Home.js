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
    <div>

		<Paper className={classes.mainHeader} style={{ height: '100vh', backgroundImage: `url("/assets/bg-masthead.jpg")` }}>
			<div className={classes.overlay} />
            
            {/* NAVBAR */}
            <div className={classes.root}>
            <AppBar position="static" color="transparent">
                <div align="left" style={{marginLeft: '2rem', marginRight: '2rem'}}>
                    <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" style={{textDecoration : 'none', color: 'white'}}>MMAGDYS</Link>
                    </Typography> 
                    <Button color="inherit"> <Link to="/" style={{textDecoration : 'none', color: 'white'}}>Home</Link> </Button>
                    <Button color="inherit"> <Link to="/blog" style={{textDecoration : 'none', color: 'white'}}>Blog</Link> </Button>
                    <Button color="inherit"> <Link to="/publications" style={{textDecoration : 'none', color: 'white'}}>Publications</Link> </Button>
                    </Toolbar>
                </div>
            </AppBar>
            </div>

            {/* MAIN CONTENT */}
            <div className={classes.mainHeaderContent} align="center">        
                <Grid container spacing={6}>
                <Grid item sm={2} />
                <Grid item sm={8}>
                    {/* <Avatar alt="Muhammad Magdy" src="/assets/me.jpg" sizes={64} className={classes.large} /> */}
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                        I am Muhammad Magdy Sayed
                    </Typography>
                    <Typography variant="h6" color="inherit" paragraph>
                        I am a researcher at IoT and Cybersecurity lab, VT-MENA, Alexandria Univeristy.
                    </Typography>
                    <Typography variant="h6" color="inherit" paragraph>
                        My research interests are Privacy-preserving, Cryptography, decentralized and distributed systems
                        , Blockchains, Peer-to-Peer Networks, Computations in untrusted environment,
                        Zero Knowledge proofs, Secure Computations.
                    </Typography> 

                    <Button variant="outlined" className={classes.navButton}>
                        <Link to="/blog" className={classes.buttonLink}>
                            BLOG
                        </Link>
                    </Button>  
                    <Button variant="outlined" className={classes.navButton}>
                        <Link to="/publications" className={classes.buttonLink}>
                            PUBLICATIONS
                        </Link>
                    </Button>                
                </Grid>
                </Grid>
            </div>

            {/* FOOTER */}
            <div align="center">
                <div>
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
                </div>
            </div>
		</Paper>

    </div>
  );
}