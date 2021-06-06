import React from 'react';
import Grid from '@material-ui/core/Grid';

import HomeHeader from '../../layouts/Header';
import HomeCover from '../../components/Home/HomeCover'
import Bio from '../../components/Home/About';
import ResearchInterst from '../../components/Home/ResearchInterest'
import BlogSection from '../../components/Home/BlogSection'
import PublicationSection from '../../components/Home/PublicationSection'
import Footer from '../../layouts/Footer';

export default function HomeView() {

  return (
    <div align="center">
			<Grid container >
				{/* <HomeHeader /> */}
				<Grid item sm={12} style={{height: '60vh'}}>
					<HomeCover />
				</Grid>

				<Grid item sm={12} >
					<Bio />
					<ResearchInterst />
					<BlogSection />
					<PublicationSection />
				</Grid>

				<Grid item sm={12} >
					<Footer />
				</Grid>
				

				{/* <Grid item sm={3} style={{padding: '1rem', paddingRight: '2rem'}}>
					<BlogSideBar />
				</Grid> */}

			</Grid>
			
     
    </div>
  );
}