import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const Description = ({ data }) => {
  return (
    <Box mb={2}>
      {data && (
        <Typography data-testid="comic-description" variant="body2">
          {data}
        </Typography>
      )}
    </Box>
  );
};

Description.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Description;
