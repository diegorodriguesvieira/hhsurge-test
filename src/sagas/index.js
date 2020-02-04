import { all } from 'redux-saga/effects';

import { watchLogin, watchLogout } from '../containers/login/ducks';
import { watchGetComics, watchGetCharacter } from '../containers/home/ducks';

export default function* rootSaga() {
  yield all([watchLogin(), watchLogout(), watchGetCharacter(), watchGetComics()]);
}
