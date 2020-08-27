/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectNav = state => state.nav || initialState;

const makeSelectCurrentSearch2 = () =>
  createSelector(
    selectNav,
    navState => navState.currentSearch2,
  );
const makeSelectLoading = () =>
  createSelector(
    selectNav,
    navState => navState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectNav,
    navState => navState.error,
  );
const makeSelectLandlords = () =>
  createSelector(
    selectNav,
    navState => navState.landlords,
  );
export {
  selectNav,
  makeSelectCurrentSearch2,
  makeSelectError,
  makeSelectLoading,
  makeSelectLandlords,
};
