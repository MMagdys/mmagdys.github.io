import React from 'react';
import Grid from '@material-ui/core/Grid';

import BlogHeader from '../../components/Blog/BlogHeader';
import BlogMain from '../../components/Blog/BlogMain'
import BlogSideBar from '../../components/Blog/BlogSideBar'


export default function BlogView() {

  return (
    <div align="center">
			<Grid container >
				<Grid item sm={12}>
					<BlogHeader />
				</Grid>

				<Grid item sm={9} style={{padding: '1rem'}}>
					<BlogMain />
				</Grid>

				<Grid item sm={3} style={{padding: '1rem', paddingRight: '2rem'}}>
					<BlogSideBar />
				</Grid>

			</Grid>
     
    </div>
  );
}