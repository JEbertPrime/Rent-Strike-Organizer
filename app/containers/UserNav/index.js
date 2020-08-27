import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { logout } from 'containers/App/actions';
import userIcon from 'images/userIcon.png';
import DropdownItem from 'components/DropdownItem';
import Image from './Image';
import Wrapper from './Wrapper';
import UserDropdown from './Dropdown';
const DropdownWrapper = styled.div`
  display: relative;
`;
export function UserNav({ user, logoutUser }) {
  const [displayDropdown, toggleDropdown] = useState(false);
  const handleMouseOver = () => toggleDropdown(true);
  const handleMouseOut = () => toggleDropdown(false);
  const landlordUrl = `/landlords/${user.landlord}`;
  return (
    <Wrapper
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onBlur={handleMouseOut}
      onMouseOut={handleMouseOut}
    >
      <Image src={userIcon} />
      <DropdownWrapper>
        <UserDropdown display={displayDropdown ? 'block' : 'none'}>
          {user.landlord ? (
            <DropdownItem to={landlordUrl}>My Landlord </DropdownItem>
          ) : null}
          <DropdownItem to="/dashboard">Settings </DropdownItem>
          <DropdownItem to="/" callback={logoutUser}>
            Logout{' '}
          </DropdownItem>
        </UserDropdown>
      </DropdownWrapper>
    </Wrapper>
  );
}

UserNav.propTypes = {
  user: PropTypes.object,
  logoutUser: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  const { user } = ownProps;
  return { user };
};
export function mapDispatchToProps(dispatch) {
  return {
    logoutUser: () => {
      console.log('logout');
      localStorage.removeItem('jwtToken');
      dispatch(logout());
    },
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserNav);
