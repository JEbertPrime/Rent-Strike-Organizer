import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );
const makeSelectCurrentSearch = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentSearch,
  );
const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );
const makeSelectLandlords = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.landlords,
  );
const makeSelectUserId = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userToken,
  );
const makeSelectLandlord = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.landlord,
  );
const makeSelectIsAuth = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.isAuth,
  );
const makeSelectToken = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userToken,
  );
export {
  makeSelectLocation,
  makeSelectCurrentSearch,
  selectGlobal,
  makeSelectError,
  makeSelectLoading,
  makeSelectLandlords,
  makeSelectUserId,
  makeSelectLandlord,
  makeSelectToken,
  makeSelectIsAuth,
};
