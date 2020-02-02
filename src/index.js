import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import configureStore from './store/configureStore';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
