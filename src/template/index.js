import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Containter from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

import { logout } from '../containers/login/ducks';
import AvatarPopper from './AvatarPopper';
import Logo from '../components/Logo';

const Template = ({ children }) => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch(logout());
  };

  return (
    <Containter disableGutters>
      <AppBar color="inherit" position="static">
        <Box mt={1} mb={1}>
          <Toolbar>
            <Box flexGrow={1} mt={2} mb={2}>
              <Logo width={100} height={79} />
            </Box>
            <AvatarPopper user={user} handleClickLogout={handleClickLogout} />
          </Toolbar>
        </Box>
      </AppBar>
      <Box component="main">{children}</Box>
    </Containter>
  );
};

Template.defaultProps = {
  user: {
    name: '',
  },
};

Template.propTypes = {
  children: PropTypes.element.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default Template;
