import React from 'react';
import Box from '@material-ui/core/Box';

const image = require('../../assets/loading.gif');

const Loading = () => {
  return (
    <Box m={10} display="flex" alignItems="center" justifyContent="center" flex={1}>
      <img alt="" src={image} />
    </Box>
  );
};

export default Loading;
