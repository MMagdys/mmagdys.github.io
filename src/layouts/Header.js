import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

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
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: '#2c3e50'}}>
        <div style={{marginLeft: '2rem', marginRight: '2rem'}}>
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
                <Link to="/" style={{textDecoration : 'none', color: 'white'}}>MMAGDYS</Link>
            </Typography> 
            <Button color="inherit"> <Link to="/" style={{textDecoration : 'none', color: 'white'}}>Home</Link> </Button>
            <Button color="inherit"> <Link to="/blog" style={{textDecoration : 'none', color: 'white'}}>Blog</Link> </Button>
            <Button color="inherit"> <Link to="/" style={{textDecoration : 'none', color: 'white'}}>About</Link> </Button>
            <Button color="inherit"> <Link to="/" style={{textDecoration : 'none', color: 'white'}}>Contact</Link> </Button>
            </Toolbar>
        </div>
      </AppBar>
    </div>
  );
}
