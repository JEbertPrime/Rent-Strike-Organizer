/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ADD_LANDLORD } from 'containers/App/constants';
import {
  loginSuccess,
  loginError,
} from 'containers/App/actions';
import {landlordAddingError} from './actions'
import request from 'utils/request';

/**
 * Github repos request/response handler
 */
const getLandlord = state => state.addLandlord.newLandlord;

export function* sendLandlord() {
  // Select username from store
  const landlord = yield select(getLandlord);
  const requestURL = `/api/landlord/add`;
  const data = {
    name: landlord.name,
    type: landlord.landlordType,
    location: landlord.location,
  };
    console.log(data)
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  };

  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, requestURL, options);
  } catch (err) {
    yield put(landlordAddingError(err));
  }
}


/**
 * Root saga manages watcher lifecycle
 */
export default function* addNewLandlord() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ADD_LANDLORD, sendLandlord);
}
