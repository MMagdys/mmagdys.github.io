import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import {Link} from 'react-router-dom'

import {POSTS} from '../../store/posts'


export default function BlogMain() {

  function PostCard({post}) {
    console.log(post)
    return (
      <Grid item md={4} sm={6}>
        <Link to ={`/blog/${post.id}`} style={{textDecoration: 'none'}} >
        <Card >
          <CardActionArea>
            <CardMedia
              component="img"
              alt={post.title}
              height="140"
              image={require(`../../_posts/images/${post.id}.png`).default} 
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
  POSTS.filter((post) => {
    // console.log(<PostCard post={post} />)
    content.push(<PostCard post={post} />) 
  })


  return (
    <div align="left">
      <Grid container spacing={3}>
        {content}
      </Grid>
    </div>
  );
}
