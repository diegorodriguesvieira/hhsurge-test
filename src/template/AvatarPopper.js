import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const avatar = require('../assets/avatar.svg');

const AvatarPopper = ({ user, handleClickLogout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box alignItems="center" display="flex">
        <Box flexDirection="column" display="flex" mr={1}>
          <Typography variant="caption" align="right">
            Welcome,
          </Typography>
          <Typography data-testid="avatar-name" variant="h6" align="right">
            {user.name}
          </Typography>
        </Box>
        <IconButton data-testid="avatar-button" onClick={handleClick}>
          <Avatar src={`${avatar}`} />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="simple-menu"
        keepMounted
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <MenuItem data-testid="avatar-logout-button" onClick={handleClickLogout}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

AvatarPopper.defaultProps = {
  user: {
    name: '',
  },
};

AvatarPopper.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
  handleClickLogout: PropTypes.func.isRequired,
};

export default AvatarPopper;
