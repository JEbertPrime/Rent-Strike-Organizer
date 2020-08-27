/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
// Sagas
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import {
  makeSelectCurrentSearch,
  makeSelectLoading,
  makeSelectError,
  makeSelectLandlords,
} from 'containers/App/selectors';

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
// Components imports
import H1 from 'components/H1';
import Input from 'components/Input';
import LandlordsList from 'components/LandlordsList';
import Form from './Form';
import messages from './messages';
import saga from './saga';
import reducer from './reducer';
import { changeCurrentSearch } from './actions';
import { loadLandlords } from '../App/actions';
const key = 'home';

const HomePageWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export function HomePage({
  currentSearch,
  loading,
  error,
  landlords,
  onSubmitForm,
  onChangeSearch,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (currentSearch && currentSearch.trim().length > 0) onSubmitForm();
  }, []);

  const landlordsListProps = {
    loading,
    error,
    landlords,
  };
  return (
    <HomePageWrapper>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <Form onSubmit={onSubmitForm}>
        <Input
          id="currentSearch"
          type="text"
          placeholder="search for your landlord"
          value={currentSearch}
          onChange={onChangeSearch}
          autoComplete="off"
        />
      </Form>
      <LandlordsList {...landlordsListProps} />
    </HomePageWrapper>
  );
}
HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  landlords: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  currentSearch: PropTypes.string,
  onChangeSearch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  landlords: makeSelectLandlords(),
  currentSearch: makeSelectCurrentSearch(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});
export function mapDispatchToProps(dispatch) {
  return {
    onChangeSearch: evt => {
      dispatch(changeCurrentSearch(evt.target.value));
      if (evt.target.value.trim().length > 0) {
        dispatch(loadLandlords());
      }
    },
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadLandlords());
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
)(HomePage);
