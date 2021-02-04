import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import LandlordListItem from 'containers/LandlordListItem';

function LandlordsList({ loading, error, landlords, nav, display = 'block' }) {
  console.log(error);
  if (nav) {
    if (loading) {
      return <List nav display={display} component={LoadingIndicator} />;
    }
    if (error.status === 404) {
      const ErrorComponent = () => (
        <ListItem
          item={[
            "We couldn't find your landlord.",
            <a href="landlords/add"> Add your landlord here!</a>,
          ]}
        />
      );
      return <List nav display={display} component={ErrorComponent} />;
    }
    if (error !== false) {
      const ErrorComponent = () => (
        <ListItem item="Something went wrong, please try again!" />
      );
      return <List nav display={display} component={ErrorComponent} />;
    }

    if (landlords !== false) {
      return (
        <List
          nav
          display={display}
          items={landlords}
          component={LandlordListItem}
        />
      );
    }
  }
  if (loading) {
    return <List component={LoadingIndicator} />;
  }
  if (error.status == 404) {
    const ErrorComponent = () => (
      <ListItem
        item={[
          "We couldn't find your landlord.",
          <a href="landlords/add"> Add your landlord here!</a>,
        ]}
      />
    );
    return <List component={ErrorComponent} />;
  }
  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (landlords !== false) {
    return <List items={landlords} component={LandlordListItem} />;
  }

  return null;
}

LandlordsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  landlords: PropTypes.any,
  nav: PropTypes.bool,
  display: PropTypes.string,
};

export default LandlordsList;
