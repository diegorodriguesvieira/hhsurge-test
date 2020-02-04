import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const Header = ({ title, creators }) => {
  return (
    <>
      {title && (
        <Box mb={1}>
          <Typography data-testid="comic-title" component="h3" variant="h5">
            {title}
          </Typography>
        </Box>
      )}
      {creators && (
        <Box mb={1}>
          <Typography data-testid="comic-creators" gutterBottom component="p" variant="caption">
            {creators}
          </Typography>
        </Box>
      )}
    </>
  );
};

Header.propTypes = {
  creators: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
