import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const TextFieldPassword = props => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <TextField
      autoComplete="current-password"
      fullWidth
      label="Password"
      size="small"
      spellCheck={false}
      type={showPassword ? 'text' : 'password'}
      variant="outlined"
      InputProps={{
        inputProps: {
          'data-testid': 'text-field-password',
        },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              data-testid="btn-show-password"
              edge="end"
              onClick={handleClickShowPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default TextFieldPassword;
