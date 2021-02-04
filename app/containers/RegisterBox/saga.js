/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { REGISTER } from 'containers/App/constants';
import {
  registerError,
  loginSuccess,
  loginError,
} from 'containers/App/actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
const getUser = state => state.register.newUser;

export function* sendRegistration() {
  // Select username from store
  const user = yield select(getUser);
  const requestURL = `/api/user/register`;
  const data = {
    name: user.name,
    email: user.email,
    password: user.passwordOne,
    password2: user.passwordTwo,
  };
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
    console.log(res);
    yield call(getUserToken);
  } catch (err) {
    yield put(registerError(err));
  }
}
export function* getUserToken() {
  // Select username from store
  const user = yield select(getUser);
  console.log(user);
  const requestURL = `/api/user/login`;
  const data = {
    email: user.email,
    password: user.passwordOne,
  };
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  };

  try {
    // Call our request helper (see 'utils/request')
    const user = yield call(request, requestURL, options);
    const { token } = user;
    localStorage.setItem('jwtToken', token);
    console.log(user);
    yield put(loginSuccess(user.token));
  } catch (err) {
    yield put(loginError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* registerUser() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(REGISTER, sendRegistration);
}
