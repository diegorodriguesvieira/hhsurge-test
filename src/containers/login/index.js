import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';

import Form from './Form';
import Header from './Header';

import './styles.scss';

const useStyles = makeStyles({
  holder: {
    height: '100vh',
  },
});

const Login = () => {
  const user = useSelector(state => state.auth.user);
  const classes = useStyles();

  const handleSubmit = values => {
    return values;
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div data-testid="login">
      <Container component="main">
        <Grid className={classes.holder} justify="center" alignItems="center" container spacing={4}>
          <Grid component={Paper} container item xs={11} sm={6} md={4}>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Form onSubmit={handleSubmit} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
