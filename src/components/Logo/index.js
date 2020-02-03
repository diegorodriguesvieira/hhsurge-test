import React from 'react';

const logo = require('../../assets/logo.svg');

const Logo = props => {
  return <img data-testid="logo" width={120} height={95} alt="" src={logo} {...props} />;
};

export default Logo;
