import { Formik, Field, Form, getIn } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';

import TextFieldPassword from '../../components/TextFieldPassword';

const LoginForm = ({ onSubmit, error, loading }) => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
  });

  const hasError = (errors, touched, name) => {
    const fieldError = getIn(errors, name);
    const fieldTouch = getIn(touched, name);
    return fieldTouch && fieldError ? fieldError : null;
  };

  const errorMessage = 'Wrong username or password. Try again.';

  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={{ username: 'peter', password: '357473' }}
      enableReinitialize
    >
      {({ errors, touched }) => (
        <Form>
          <Grid item container>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Field
                  as={TextField}
                  autoComplete="username"
                  error={Boolean(hasError(errors, touched, 'username'))}
                  fullWidth
                  helperText={hasError(errors, touched, 'username')}
                  id="username"
                  label="Username or email"
                  name="username"
                  size="small"
                  spellCheck={false}
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl margin="normal" fullWidth>
                <Field
                  as={TextFieldPassword}
                  error={Boolean(hasError(errors, touched, 'password')) || Boolean(error)}
                  helperText={
                    hasError(errors, touched, 'password') || (error ? errorMessage : null)
                  }
                  id="password"
                  name="password"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl margin="dense" fullWidth>
                <Button
                  disabled={loading}
                  color="primary"
                  fullWidth
                  type="submit"
                  variant="contained"
                >
                  Sign In
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

LoginForm.defaultProps = {
  error: false,
  loading: false,
};

LoginForm.propTypes = {
  error: PropTypes.bool,
  loading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
