import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

const PrivateRoute = ({ children, ...rest }) => {
  const user = useSelector(state => state.auth.user);

  const handleRender = state =>
    user ? children : <Redirect to={{ pathname: '/login', state: { from: state.location } }} />;

  return <Route render={handleRender} {...rest} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;
