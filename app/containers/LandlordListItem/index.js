/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { FormattedNumber } from 'react-intl';

import { makeSelectCurrentSearch } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import LandlordLink from './LandlordLink';
import Wrapper from './Wrapper';
import H2 from './H2';

export function LandlordListItem(props) {
  const { item } = props;
  const url = `/landlords/${item._id}`;
  const content = (
    <Wrapper>
      <LandlordLink to={url}>{item.name}</LandlordLink>
      <H2>
        Has {item.numTenants} tenants in {item.location.join(', ')}
      </H2>
    </Wrapper>
  );

  // Render the content into a list item
  return <ListItem key={`landlord-list-item-${item.name}`} item={content} />;
}

ListItem.propTypes = {
 item: PropTypes.oneOf[(PropTypes.array, PropTypes.object)],
  currentSearch: PropTypes.string,
};

export default connect(
  createStructuredSelector({
    currentSearch: makeSelectCurrentSearch(),
  }),
)(LandlordListItem);
