import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

import Cover from '../Cover';
import Description from '../Description';

const Hero = ({ cover, title, description }) => {
  return (
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Cover src={cover} testId="hero-cover" />
        </Grid>
        <Grid item md={6}>
          {title && (
            <Typography data-testid="hero-title" variant="h3" component="h1" gutterBottom>
              {title}
            </Typography>
          )}
          <Description testId="hero-description" data={description} />
        </Grid>
      </Grid>
    </Grid>
  );
};

Hero.defaultProps = {
  cover: '',
  description: '',
  title: '',
};

Hero.propTypes = {
  cover: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
};

export default Hero;
