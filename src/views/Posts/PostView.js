import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import MathJax from 'react-mathjax';
import RemarkMathPlugin from 'remark-math';
import gfm from 'remark-gfm';

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

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  
  render() {

    let content = ""
    if (this.props.post) {

      let cont = this.state.content
      let props = {source:cont, plugins: [], renderers: []}
      const newProps = {
        ...props,
        plugins: [
          RemarkMathPlugin,
          gfm
        ],
        renderers: {
          ...props.renderers,
          math: (props) => 
            <MathJax.Node formula={props.value} />,
          inlineMath: (props) =>
            <MathJax.Node inline formula={props.value} />
        }
      };
      
      content =  
        <div className="content">
          <MathJax.Provider input="tex">
            <ReactMarkdown {...newProps} />
          </MathJax.Provider>
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
                style={{height: '300px'}}
                // image={require(`../../_posts/images/${this.props.post.id}.png`).default} 
                image={`/assets/posts/${this.props.post.id}.png`}
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