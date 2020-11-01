import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function SimpleList() {
  const classes = useStyles();

  return (
      <div>
        <Paper style={{marginBottom: '2rem'}}>
          <div className={classes.root}>
            <List component="nav" aria-label="posts tag"
            subheader={
              <div style={{backgroundColor: '#2c3e50', padding: '8px'}}>
                <ListSubheader component="div" id="nested-list-subheader">
                <Typography variant="h6" gutterBottom style={{color: 'white'}}>
                  TAGS
                </Typography>
              </ListSubheader>
              </div>
            }
            >
            
              <ListItem button divider>
                <ListItemText primary="Cryptography" />
              </ListItem>
              <ListItem button divider>
                <ListItemText primary="Web security" />
              </ListItem>
              <ListItem button divider>
                <ListItemText primary="Cloud security" />
              </ListItem>
              <ListItem button divider>
                <ListItemText primary="Offensive security" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Web development" />
              </ListItem>
            </List>
          </div>
        </Paper>

        <Paper >
          <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders"
            subheader={
              <div style={{backgroundColor: '#2c3e50', padding: '8px'}}>
                <ListSubheader component="div" id="nested-list-subheader">
                <Typography variant="h6" gutterBottom style={{color: 'white'}}>
                  LATEST POSTS
                </Typography>
              </ListSubheader>
              </div>
            }
            >
              <ListItem button divider>
                <ListItemText primary="Cryptography" />
              </ListItem>
              <ListItem button divider>
                <ListItemText primary="Web Security" />
              </ListItem>
              <ListItem button divider>
                <ListItemText primary="Offensive security" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Web development" />
              </ListItem>
            </List>
          </div>
        </Paper>

      </div>
    
  );
}
