import React from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import MainLayout from './MainLayout';
import BlogView from '../views/Blog/BlogView';
import BlogSearch from '../views/Blog/BlogSearchView.js';
import PostView from '../views/Posts/PostView';
import PublicationsView from '../views/Publications/PublicationsView';
import HomeView from '../views/Home/HomeView';
import Home from './Home';
import {POSTS} from '../store/posts';


function Main() {

  const postWithId = ({match}) => {
    return(<PostView post={POSTS.filter((post) => 
        post.id === match.params.postId)[0]} />);  
  }

  const postsWithTag = ({match}) => {
    let tag = match.params.tagId.replace("_", " ");
    let posts = []
    POSTS.filter((post) => {
      // console.log(post.tags.includes(tag))
      if(post.tags.includes(tag))
        posts.push(post);
    })
    return(<BlogSearch posts={posts} tag={tag} />)
    
  }


  return (
  <div>
			<Switch>
        <MainLayout exact path="/blog" component={BlogView} />
        <MainLayout exact path="/blog/:postId" component={postWithId} />
        <MainLayout exact path="/blog/tags/:tagId" component={postsWithTag} />
        <MainLayout exact path="/publications" component={PublicationsView} />
        <Route exact path="/" component={HomeView} />
        <Redirect to="/blog" />
      </Switch>
  </div>
  );
}

export default withRouter(Main)