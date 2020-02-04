import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';

import Description from '../Description';
import Cover from '../Cover';
import Footer from './Footer';
import Header from './Header';
import Infos from './Infos';
import Date from './Date';

const Comic = ({
  cover,
  creators,
  description,
  edition,
  format,
  modified,
  moreDetails,
  pages,
  title,
}) => {
  return (
    <Grid item md={6}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Cover src={cover} testId="comic-cover" />
        </Grid>
        <Grid item md={8}>
          <Header title={title} creators={creators} />
          <Date label="Last modification" date={modified} />
          <Infos data={[edition, format, pages].filter(item => !!item)} />
          <Description testId="comic-description" data={description} />
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
  modified: '',
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
  modified: PropTypes.string,
  moreDetails: PropTypes.string,
  pages: PropTypes.string,
  title: PropTypes.string,
};

export default Comic;
