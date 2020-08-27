/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLandlord = state => state.landlord || initialState;
const getId = (state, props) => props.match.params.id;
const makeSelectId = () =>
  createSelector(
    [selectLandlord, getId],
    (landlordState, id) => id,
  );
export { selectLandlord, makeSelectId };
