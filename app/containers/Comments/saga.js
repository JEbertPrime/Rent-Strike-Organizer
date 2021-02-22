/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
// import { ADD_COMMENT } from 'containers/LandlordPage/constants';
import { LOAD_LANDLORD } from 'containers/App/constants';
// import { commentAdded, commentError } from 'containers/LandlordPage/actions';
import {
  landlordLoadedById,
  landlordLoadingByIdError,
} from 'containers/App/actions';
import request from 'utils/request';
// import { MakeSelectUserId } from 'containers/App/selectors';
// import { makeSelectId } from './selectors';

/**
 * Github repos request/response handler
 */

export function* getLandlordById(action) {
  // Select username from store
  const { id } = action;
  const requestURL = `/api/landlord/${id}`;

  try {
    // Call our request helper (see 'utils/request')
    const landlord = yield call(request, requestURL);
    yield put(landlordLoadedById(landlord.data, id));
  } catch (err) {
    yield put(landlordLoadingByIdError(err));
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
  yield takeLatest(LOAD_LANDLORD, getLandlordById);
}
