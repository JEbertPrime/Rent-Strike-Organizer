/**
 *
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */
// sagas
// import injectSaga from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import jwtDecode from 'jwt-decode';

import React, { useEffect, memo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

// components
import UserNav from 'containers/UserNav';
import LandlordsList from 'components/LandlordsList';
import {
  makeSelectCurrentSearch2,
  makeSelectLoading,
  makeSelectError,
  makeSelectLandlords,
} from 'containers/NavBar/selectors';
import { makeSelectIsAuth, makeSelectToken } from 'containers/App/selectors';
import Bar from './Bar';
// import H2 from './H2';
import Input from './Input';
import NavLink from './NavLink';

import saga from './saga';
import reducer from './reducer';
import useOutsideCheck from './useOutsideCheck';
import { changeCurrentSearch2, loadLandlords } from './actions';
const key = 'nav';
const NavItemsWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 100%;
  height: max-content;
`;
const FlexWrapper = styled.div`
  display: flex;
`;
const SearchWrapper = styled.div`
  width: 10em;
`;

export function NavBar({
  currentSearch,
  loading,
  error,
  landlords,
  onSubmitForm,
  onChangeSearch,
  isAuth,
  userToken,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
  }, []);
    var user
  if(isAuth){
           try { 
                user = jwtDecode(userToken)
           } catch (error)
           {
                user = undefined
               console.log('poop')
           }
       }else{
            user = undefined
       } 
  const landlordListRef = useRef(null);
  const [displayList, setDisplay] = useState(true);
  useOutsideCheck(landlordListRef, setDisplay);
  const landlordsListProps = {
    loading,
    error,
    landlords,
  };
  return (
    <Bar className="nav-bar">
      <NavItemsWrapper>
        <FlexWrapper>
          <NavLink exact activeStyle={{ fontWeight: 'bold' }} to="/">
            Home
          </NavLink>
          <NavLink activeStyle={{ fontWeight: 'bold' }} to="/about">
            About
          </NavLink>
          <NavLink activeStyle={{ fontWeight: 'bold' }} to="/resources">
            Resources
          </NavLink>
        </FlexWrapper>
        <FlexWrapper>
          <SearchWrapper ref={landlordListRef}>
            <form onSubmit={onSubmitForm}>
              <Input
                id="currentSearch"
                type="text"
                placeholder="search..."
                value={currentSearch}
                onChange={onChangeSearch}
                autoComplete="off"
              />
            </form>
            <LandlordsList
              display={displayList ? 'block' : 'none'}
              nav
              {...landlordsListProps}
            />
          </SearchWrapper>
          {user ? (
            <UserNav user={user} />
          ) : (
            <NavLink
              login="true"
              activeStyle={{ fontWeight: 'bold' }}
              to="/login"
            >
              Login
            </NavLink>
          )}
        </FlexWrapper>
      </NavItemsWrapper>
    </Bar>
  );
}
NavBar.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  landlords: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  currentSearch: PropTypes.string,
  onChangeSearch: PropTypes.func,
  isAuth: PropTypes.bool,
  userToken: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  landlords: makeSelectLandlords(),
  currentSearch: makeSelectCurrentSearch2(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  isAuth: makeSelectIsAuth(),
  userToken: makeSelectToken(),
});
export function mapDispatchToProps(dispatch) {
  return {
    onChangeSearch: evt => {
      dispatch(changeCurrentSearch2(evt.target.value));
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
)(NavBar);
