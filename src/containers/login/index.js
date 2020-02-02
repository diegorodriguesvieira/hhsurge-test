import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';

const Login = () => {
  const user = useSelector(state => state.auth.user);

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div data-testid="login">
      <p>Login</p>
    </div>
  );
};

export default Login;
