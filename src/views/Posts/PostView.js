import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import BlogSideBar from '../../components/Blog/BlogSideBar';

import './postView.css'


class PostView extends Component {
    
  constructor(props) {
    super(props)
    this.state = { content: null }
  }
  
  componentWillMount() {
    const postFile =  require(`../../_posts/${this.props.post.id}.md`).default;
    fetch(postFile).then((response) => response.text()).then((text) => {
      this.setState({ content: text })
    })
  }

  
  render() {

    let content = ""
    if (this.props.post) {
      content =  
        <div className="content">
          <ReactMarkdown source={this.state.content} />
        </div>
    }
    else{
      content =  
        <h1>ERROR 404</h1>    
    }

    return (
      <Grid container>
        <Grid item sm={9} >
          <Card >
            <CardActionArea>
              <CardMedia
                style={{height: '400px'}}
                image={require(`../../_posts/images/${this.props.post.id}.png`).default} 
                title={this.props.post.title}
              />
            </CardActionArea>
          </Card>
          <h1>{this.props.post.title}</h1>
          {content}
        </Grid>
        <Grid item sm={3} style={{padding: '2rem'}}>
          <BlogSideBar />
        </Grid>
      </Grid>
    )
      
  }
}


export default PostView  