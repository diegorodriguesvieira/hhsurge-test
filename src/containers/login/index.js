import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';

import Form from './Form';
import Header from './Header';
import { login } from './ducks';

const useStyles = makeStyles({
  holder: {
    height: '100vh',
  },
});

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const loginError = useSelector(state => state.auth.loginError);
  const loginLoading = useSelector(state => state.auth.loginLoading);
  const classes = useStyles();

  if (user) {
    return <Redirect to="/home" />;
  }

  const handleSubmit = values => {
    dispatch(login(values));
  };

  return (
    <div data-testid="login">
      <Container component="main">
        <Grid className={classes.holder} justify="center" alignItems="center" container spacing={4}>
          <Grid component={Paper} container item xs={11} sm={6} md={4}>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Form loading={loginLoading} error={loginError} onSubmit={handleSubmit} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
