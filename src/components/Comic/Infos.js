import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import React from 'react';

const Infos = ({ data }) => {
  return Array.isArray(data) && data.length ? (
    <Box mb={1} display="flex">
      {data.map((item, index) => (
        <Box key={item} mr={1}>
          <Chip data-testid={`comic-info-${index}`} size="small" label={item} color="secondary" />
        </Box>
      ))}
    </Box>
  ) : null;
};

Infos.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Infos;
