import styled, { css } from 'styled-components';

const H1 = styled.h1`
  font-size: 2em;
  margin-bottom: 0.25em;
  margin-top: 0px;
  ${props =>
    props.white &&
    css`
      color: white;
    `};
`;

export default H1;
