import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';

import {POSTS} from '../../store/posts'


const useStyles = makeStyles((theme) => ({
  
}));


export default function BlogSection() {

    const classes = useStyles();
    
    function PostCard({post}) {
        // console.log(post)
        return (
          <Grid item sm={4} style={{height: '100%'}}>
            <Link to ={`/blog/${post.id}`} style={{textDecoration: 'none'}} >
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={post.title}
                  height="140"
                  // image={require(`../../_posts/images/${post.id}.png`).default} 
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
    for (var i = 0; i < 3; i++) {
        content.push(<PostCard post={POSTS[i]} key={POSTS[i].id}/>) 
    }


  return (
    <div id="blog" style={{padding: '2rem', backgroundColor: '#f4f4f4'}} align="center">

        <Typography component="h1" variant="h3" color="primary" style={{color: '#7090cb'}}>
            Blog
        </Typography>
        <Divider style={{width: "32px", backgroundColor: '#121b3e', marginBottom: '24px', height: '5px'}} />

        <div align="center" style={{paddingLeft: '4rem', paddingRight: '4rem'}}>
            <Grid container spacing={5}>
                {content}
            </Grid>

            <div style={{marginTop: '2rem'}}>
                <Link to="/blog/" style={{textDecoration: 'none'}} >
                    <Button variant="contained" size="large" color="primary" style={{backgroundColor: "#121b3e", }}>
                        see all Posts
                    </Button> 
                </Link>
                
            </div>
        </div>

    </div>
  );
}