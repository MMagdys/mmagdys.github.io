import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';


export default function ButtonAppBar() {

  return (
    <div align="center">
      <Paper style={{backgroundColor: '#2c3e50', padding: '2rem', color: 'white'}}>
      <Typography variant="subtitle2" gutterBottom>
        Copyright © 2020 - mmagdys.me
      </Typography>
      </Paper>
    </div>
  );
}
