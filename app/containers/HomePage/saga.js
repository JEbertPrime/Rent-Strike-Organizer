/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_LANDLORDS } from 'containers/App/constants';
import { landlordsLoaded, landlordLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
const getSearch = state => state.home.currentSearch;

export function* getLandlords() {
  // Select username from store
  const currentSearch = yield select(getSearch);
  const requestURL = `api/landlords/${currentSearch}`;

  try {
    // Call our request helper (see 'utils/request')
    const landlords = yield call(request, requestURL);
    yield put(landlordsLoaded(landlords.data, currentSearch));
  } catch (err) {
    yield put(landlordLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* landlordData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_LANDLORDS, getLandlords);
}
