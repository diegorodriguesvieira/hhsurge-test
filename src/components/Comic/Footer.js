import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import OpenInNew from '@material-ui/icons/OpenInNew';
import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ url }) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return url ? (
    <Box mb={1}>
      <Button
        data-testid="comic-more-details"
        onClick={handleClick}
        endIcon={<OpenInNew />}
        variant="contained"
        color="primary"
      >
        More Details
      </Button>
    </Box>
  ) : (
    ''
  );
};

Footer.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Footer;
