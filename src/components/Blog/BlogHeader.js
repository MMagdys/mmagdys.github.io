import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import headerImg from '../../assets/bg-masthead.jpg';

import DescriptionIcon from '@material-ui/icons/Description';
import ComputerIcon from '@material-ui/icons/Computer';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles((theme) => ({
  mainHeader: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
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
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainHeaderContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
    },
    
  },
}));


export default function BlogHeader() {

	const classes = useStyles();

  return (
    <div >

		<Paper className={classes.mainHeader} style={{ backgroundImage: `url(${headerImg})` }}>
			<div className={classes.overlay} />
      <div className={classes.mainHeaderContent}>
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          My Blog
				</Typography>
        <Typography variant="h5" color="inherit" paragraph>
        I write about various topics including Cyber security: web App security, Reverse engineering, Cryptography, programming, web development
				</Typography>

        <Grid container spacing={6}>
          <Grid item sm={4}>
            <DescriptionIcon fontSize="large" />
            <Typography variant="h6" color="inherit" gutterBottom>
            Articles
            </Typography>
            <Typography variant="subtitle1" color="inherit" gutterBottom>
            Article is a post, which explains a specific topic. In my opinion this post is more useful for research purpose.
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <ComputerIcon fontSize="large" />
            <Typography variant="h6" color="inherit" gutterBottom>
            Walkthroughs
            </Typography>
            <Typography variant="subtitle1" color="inherit" gutterBottom>
            Walkthrough is a detailed step by step demonstration of how to achieve a certain task.
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <CreateIcon fontSize="large" />
            <Typography variant="h6" color="inherit" gutterBottom>
            Write-Ups
            </Typography>
            <Typography variant="subtitle1" color="inherit" gutterBottom>
            Capture The Flag (CTF)'s write-up for competitions, in which I participared. It can be used as a learning materials.
            </Typography>
          </Grid>
        </Grid>

      </div>
		</Paper>

    </div>
  );
}