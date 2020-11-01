import React from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import Header from './Header'
import Footer from './Footer'
import BlogView from '../views/Blog/BlogView';
import PostView from '../views/Posts/PostView';
import {POSTS} from '../store/posts';


function Main() {

  const postWithId = ({match}) => {
    POSTS.filter((post) => {
      console.log(post)
    })
    return(<PostView post={POSTS.filter((post) => 
        post.id === match.params.postId)[0]} />);  
  }

  return (
  <div>
    <Header />

    <div style={{padding: '2rem'}}>
			<Switch>
        <Route exact path="/blog" component={BlogView} />
        <Route exact path="/blog/:postId" component={postWithId} />
        <Redirect to="/blog" />

      </Switch>
    </div>

    <Footer />
  </div>
  );
}

export default withRouter(Main)