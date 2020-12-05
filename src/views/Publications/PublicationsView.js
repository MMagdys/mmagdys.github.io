import React from 'react';
import Grid from '@material-ui/core/Grid';

import BlogHeader from '../../components/Blog/BlogHeader';
import PublicationsMain from '../../components/Publications/PublicationsMain'
import BlogSideBar from '../../components/Blog/BlogSideBar'


export default function PublicationsView() {

  return (
    <div align="center">
			<Grid container >
				{/* <Grid item sm={12}>
					<BlogHeader />
				</Grid> */}

				<Grid item sm={10} style={{padding: '1rem'}}>
					<PublicationsMain />
				</Grid>

				{/* <Grid item sm={3} style={{padding: '1rem', paddingRight: '2rem'}}>
					<BlogSideBar />
				</Grid> */}

			</Grid>
     
    </div>
  );
}