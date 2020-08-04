/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
//Sagas
import injectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import saga from './saga';




import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import GlobalStyle from '../../global-styles';
import styled from 'styled-components';

//Components imports
import H1 from 'components/H1';
import Input from 'components/Input'

const HomePageWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function HomePage() {
  return (
     <HomePageWrapper> 
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
          <Input />
      </HomePageWrapper>
  );
}
