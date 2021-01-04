import React from 'react';
import Grid from '@material-ui/core/Grid';

import BlogHeader from '../../components/Blog/BlogHeader';
import BlogSearch from '../../components/Blog/BlogSearch'
import BlogSideBar from '../../components/Blog/BlogSideBar'


export default function BlogView(props) {

  return (
    <div align="center">
			<Grid container >
				<Grid item sm={12}>
					{/* <BlogHeader /> */}
				</Grid>

				<Grid item sm={9} style={{padding: '1rem'}}>
					<BlogSearch posts={props.posts} tag={props.tag}/>
				</Grid>

				<Grid item sm={3} style={{padding: '1rem', paddingRight: '2rem'}}>
					<BlogSideBar />
				</Grid>

			</Grid>
     
    </div>
  );
}