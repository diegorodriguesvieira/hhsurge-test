import { Formik, Field, Form, getIn } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';

import TextFieldPassword from '../../components/TextFieldPassword';

const LoginForm = ({ onSubmit }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
  });

  const hasError = (errors, touched, name) => {
    const error = getIn(errors, name);
    const touch = getIn(touched, name);
    return touch && error ? error : null;
  };

  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={{ email: '', password: '' }}
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
                  error={Boolean(hasError(errors, touched, 'email'))}
                  fullWidth
                  helperText={hasError(errors, touched, 'email')}
                  id="email"
                  label="Username or email"
                  name="email"
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
                  error={Boolean(hasError(errors, touched, 'password'))}
                  helperText={hasError(errors, touched, 'password')}
                  id="password"
                  name="password"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl margin="dense" fullWidth>
                <Button color="primary" fullWidth type="submit" variant="contained">
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

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
