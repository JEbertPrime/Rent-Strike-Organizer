import styled from 'styled-components';

const Wrapper = styled.li`
  width: 100%;
  height: max-content;
  min-height: 3rem;
  display: flex;
  align-items: center;
  position: relative;
  border-top: 1px solid #eee;
  padding: 0px 5px 0px 5px;
  &:first-child {
    border-top: none;
  }
  &:hover {
    background-color: #dedede;
  }
`;

export default Wrapper;
