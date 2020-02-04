import React from 'react';
import Typography from '@material-ui/core/Typography';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';

const Date = ({ date }) => {
  return date ? (
    <Typography variant="caption">
      Last modification: {format(parseISO(date), 'dd/MM/yyyy hh:mm:ss aaaa')}
    </Typography>
  ) : null;
};

Date.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Date;
