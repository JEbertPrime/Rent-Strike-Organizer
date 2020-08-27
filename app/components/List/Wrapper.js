import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: ${props => props.display};
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: white;
  border-radius: 3px;
  overflow: hidden;
  ${props =>
    props.nav &&
    css`
      position: fixed;
      width: inherit;
    `};
`;

export default Wrapper;
