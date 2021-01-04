import React from 'react';
import Grid from '@material-ui/core/Grid';

import HomeHeader from '../../components/Home/HomeHeader';


export default function HomeView() {

  return (
    <div align="center">
			{/* <Grid container > */}
				{/* <Grid item sm={12}>
					<HomeHeader />
				</Grid> */}

				{/* <Grid item sm={10} style={{padding: '1rem'}}>
					<PublicationsMain />
				</Grid> */}

				{/* <Grid item sm={3} style={{padding: '1rem', paddingRight: '2rem'}}>
					<BlogSideBar />
				</Grid> */}

			{/* </Grid> */}
			<HomeHeader />
     
    </div>
  );
}