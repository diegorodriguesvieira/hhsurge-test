import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';

import Cover from './Cover';
import Description from './Description';
import Footer from './Footer';
import Header from './Header';
import Infos from './Infos';

const Comic = ({ cover, creators, description, edition, format, moreDetails, pages, title }) => {
  return (
    <Grid item md={6}>
      <Grid container spacing={2}>
        <Cover src={cover} />
        <Grid item md={8}>
          <Header title={title} creators={creators} />
          <Infos data={[edition, format, pages].filter(item => !!item)} />
          <Description data={description} />
          <Footer url={moreDetails} />
        </Grid>
      </Grid>
    </Grid>
  );
};

Comic.defaultProps = {
  cover: '',
  creators: '',
  description: '',
  edition: '',
  format: '',
  moreDetails: '',
  pages: '',
  title: '',
};

Comic.propTypes = {
  cover: PropTypes.string,
  creators: PropTypes.string,
  description: PropTypes.string,
  edition: PropTypes.string,
  format: PropTypes.string,
  moreDetails: PropTypes.string,
  pages: PropTypes.string,
  title: PropTypes.string,
};

export default Comic;
