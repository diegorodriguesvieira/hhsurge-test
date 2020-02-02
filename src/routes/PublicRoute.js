import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const PublicRoute = props => {
  return <Route {...props} />;
};

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
};

export default PublicRoute;
