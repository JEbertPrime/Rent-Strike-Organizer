import styled from 'styled-components';

const Wrapper = styled.li`
  width: 100%;
  height: max-content;
  min-height: 3rem;
  display: flex;
  align-items: center;
  position: relative;
  border-top: 1px solid #eee;
  &:first-child {
    border-top: none;
  }
`;

export default Wrapper;
