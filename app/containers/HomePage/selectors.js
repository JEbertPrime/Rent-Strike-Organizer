/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectLandlord = () =>
  createSelector(
    selectHome,
    homeState => homeState.landlord,
  );

export { selectHome, makeSelectLandlord };
