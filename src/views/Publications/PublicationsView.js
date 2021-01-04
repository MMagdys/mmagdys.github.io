import React from 'react';
import Grid from '@material-ui/core/Grid';

import PublicationsMain from '../../components/Publications/PublicationsMain'


export default function PublicationsView() {

  return (
    <div align="center">
			<Grid container >
				
				<Grid item sm={10} style={{padding: '1rem'}}>
					<PublicationsMain />
				</Grid>

			</Grid>
     
    </div>
  );
}