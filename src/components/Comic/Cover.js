import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
  image: {
    height: 'auto',
    verticalAlign: 'middle',
    width: '100%',
  },
});

const Cover = ({ src }) => {
  const classes = useStyles();

  return src ? (
    <Grid item xs={12} md={4}>
      <img data-testid="comic-cover" className={classes.image} alt="" src={src} />
    </Grid>
  ) : null;
};

Cover.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Cover;
