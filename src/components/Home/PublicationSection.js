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

import {PUBLICATIONS} from '../../store/publications'


const useStyles = makeStyles((theme) => ({
  
}));


export default function PublicationSection() {

    const classes = useStyles();
    
    function PostCard({post}) {
        console.log(post)
        return (
          <Grid item sm={6} style={{height: '100%'}}>
            <a target="_blank" href={`${post.publisher}`} style={{textDecoration: 'none'}} >
            <Card style={{ backgroundColor: '#f4f4f4'}}>
              <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {post.abstract}
                    </Typography>
                  </CardContent>
              </CardActionArea>
            </Card>
            </a>
          </Grid>
        );
    }

    
    let content = [];

    PUBLICATIONS.map((year) => {
        year.publications.map((pub) => {
            content.push(<PostCard post={pub} key={pub.title}/>);
        })
    })


  return (
    <div id="publications" style={{padding: '2rem', backgroundColor: '#aaa8a6'}} align="center">

        <Typography component="h1" variant="h3" color="primary" style={{color: '#7090cb'}}>
        Publications
        </Typography>
        <Divider style={{width: "32px", backgroundColor: '#121b3e', marginBottom: '24px', height: '5px'}} />

        <div align="center" style={{paddingLeft: '4rem', paddingRight: '4rem'}}>
            <Grid container spacing={5}>
                {content}
            </Grid>

            <div style={{marginTop: '2rem'}}>
                <Link to="/blog/" style={{textDecoration: 'none'}} >
                    <Button variant="contained" size="large" color="primary" style={{backgroundColor: "#121b3e", }}>
                        all Publications
                    </Button> 
                </Link>
                
            </div>
        </div>

    </div>
  );
}