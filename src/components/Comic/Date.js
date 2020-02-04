import { format, parseISO } from 'date-fns';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const Date = ({ date }) => {
  return date ? (
    <Box mb={2}>
      <Typography variant="caption">
        Last modification: {format(parseISO(date), 'dd/MM/yyyy hh:mm:ss aaaa')}
      </Typography>
    </Box>
  ) : null;
};

Date.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Date;
