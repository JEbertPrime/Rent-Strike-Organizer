import styled, { css } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const NavLink = styled(Link)`
  font-size: 1.1rem;
  font-weight: 400;
  height: 100%;
  color: black;
  display: flex;
  text-decoration: none;
  &:hover {
    color: grey;
  }
  align-items: center;
  border-right: ${props => (props.login ? 'none' : '1px solid grey')};
  ${props =>
    props.login &&
    css`
      padding-left: 5px;
    `}
  padding-right: 5px;
  margin-inline-start: 0px;
  margin-inline-end: 5px;
  margin-block-start: 0px;
  margin-block-end: 0px;
`;

export default NavLink;
