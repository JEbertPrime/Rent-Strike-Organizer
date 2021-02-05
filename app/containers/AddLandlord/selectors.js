/**
 * LoginBox selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAddLandlord = state => state.addLandlord || initialState;

const makeSelectNewLandlord = () =>
  createSelector(
    selectAddLandlord,
    addLandlordState => addLandlordState.newLandlord,
  );
const makeSelectError = () =>
    createSelector(
        selectAddLandlord,
        addLandlordState => addLandlordState.error
    )
export {

  makeSelectNewLandlord,
    makeSelectError
};
