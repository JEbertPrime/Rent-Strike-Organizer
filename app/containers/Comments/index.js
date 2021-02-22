/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
// Sagas
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import {
  makeSelectLoading,
  // makeSelectError,
  makeSelectLandlord,
} from 'containers/App/selectors';
import { loadLandlordById } from 'containers/App/actions';
// Components imports
import { LandlordInfoCard } from 'containers/LandlordInfoCard';
import { makeSelectId } from './selectors';
// import { addComment } from './actions';
import saga from './saga';
import reducer from './reducer';
const key = 'landlord';

const LandlordPageWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 10px 16px;
  flex-direction: column;
  height: max-content;
`;

export function LandlordPage({
  loading,
  // error,
  landlord,
  id,
  getLandlordData,
  // submitComment,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    getLandlordData(id);
  }, [id]);
  return (
    <LandlordPageWrapper>
      <LandlordInfoCard landlord={landlord} loading={loading} />
    </LandlordPageWrapper>
  );
}
LandlordPage.propTypes = {
  loading: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  landlord: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  id: PropTypes.string,
  getLandlordData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  // error: makeSelectError(),
  id: makeSelectId(),
  landlord: makeSelectLandlord(),
});
export function mapDispatchToProps(dispatch) {
  return {
    /* submitComment: evt => {
      dispatch(addComment(evt.target.value));
    }, */
    getLandlordData: evt => {
      dispatch(loadLandlordById(evt));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LandlordPage);
