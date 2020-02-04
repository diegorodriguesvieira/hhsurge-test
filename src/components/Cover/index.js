import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
  image: {
    height: 'auto',
    verticalAlign: 'middle',
    width: '100%',
  },
});

const Cover = ({ src, testId }) => {
  const classes = useStyles();

  return src ? <img data-testid={testId} className={classes.image} alt="" src={src} /> : null;
};

Cover.propTypes = {
  src: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

export default Cover;
