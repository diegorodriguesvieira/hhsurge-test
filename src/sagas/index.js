import { all } from 'redux-saga/effects';

import { watchLogin, watchLogout } from '../containers/login/ducks';

export default function* rootSaga() {
  yield all([watchLogin(), watchLogout()]);
}
