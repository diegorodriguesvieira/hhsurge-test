import Box from '@material-ui/core/Box';
import React from 'react';

import Title from '../../components/Title';
import Logo from '../../components/Logo';

const Header = () => {
  return (
    <>
      <Box mb={2} mt={2} display="flex" justifyContent="center">
        <Logo />
      </Box>
      <Box mb={2}>
        <Title align="center" component="h2" variant="h5">
          Welcome to our comics reader
          <br />
          login and enjoy!
        </Title>
      </Box>
    </>
  );
};

export default Header;
