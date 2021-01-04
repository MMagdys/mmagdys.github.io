import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import {Link} from 'react-router-dom'
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
      margin: theme.spacing(0,0,5,0),
      padding: theme.spacing(1)
  }
}));

export default function BlogSearch(props) {

  const classes = useStyles();

  function PostCard({post}) {
    // console.log(post)
    return (
      <Grid item md={4} sm={6}>
        <Link to ={`/blog/${post.id}`} style={{textDecoration: 'none'}} >
        <Card >
          <CardActionArea>
            <CardMedia
              component="img"
              alt={post.title}
              height="140"
              image={`/assets/posts/${post.id}.png`}
              title={post.title}
            />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.description.slice(0, 200)}
                </Typography>
              </CardContent>
          </CardActionArea>
        </Card>
        </Link>
      </Grid>
    );
  }

  let content = [];
  props.posts.filter((post) => {
    content.push(<PostCard post={post} key={post.id} />) 
  })


  return (
    <div align="left">
        <Paper className={classes.paper}>
            <Chip label={props.tag} />
        </Paper>
        <Grid container spacing={3}>
            {content}
        </Grid>
    </div>
  );
}
