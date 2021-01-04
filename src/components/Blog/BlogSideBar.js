import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

import {POSTS} from '../../store/posts';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function BlogSideBar(props) {
  const classes = useStyles();

  const latestPosts = POSTS.slice(0,3)
  const latestPostsList = [];
  latestPosts.filter((post) => {
    latestPostsList.push( 
      <ListItem button divider key={post.id}>
        <Link to={`/blog/${post.id}`} style={{textDecoration: 'none', color: 'black'}}> 
          <ListItemText primary={post.title} />
        </Link>
      </ListItem>
    ) 
  })

  let TAGS = [];
  let tags
  POSTS.map((post) => {
    tags = post.tags.split(",");
    for (const i in tags) {
      if (!TAGS.includes(tags[i])) {
        TAGS.push(tags[i]);
      }
    }
  })

  let tagsToView = [];
  TAGS.filter((tag) => {
    tagsToView.push( 
      <ListItem button divider key={tag}>
        <Link to={`/blog/tags/${tag.replace(" ", "_")}`} style={{textDecoration: 'none', color: 'black'}}> 
          <ListItemText primary={tag}/>
        </Link>
      </ListItem>
    ) 
  })

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
              {tagsToView}
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
              {latestPostsList}
            </List>
          </div>
        </Paper>

      </div>
    
  );
}
