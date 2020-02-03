import { all } from 'redux-saga/effects';

import { watchLogin } from '../containers/login/ducks';

export default function* root() {
  yield all([watchLogin()]);
}
