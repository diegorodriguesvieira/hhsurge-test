import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  description: {
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 4,
    display: '-webkit-box',
    overflow: 'hidden',
  },
});

const Description = ({ data, testId }) => {
  const classes = useStyles();

  return (
    <Box mb={2}>
      {data && (
        <Typography
          color="textSecondary"
          className={classes.description}
          data-testid={testId}
          variant="body2"
        >
          {data}
        </Typography>
      )}
    </Box>
  );
};

Description.propTypes = {
  data: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

export default Description;
