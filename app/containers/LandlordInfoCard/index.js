/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/**
 * LandlordInfoCard
 *
 * Lists basic info of a landlord
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import H1 from './H1';
import H2 from './H2';
import LandlordLink from './LandlordLink';

export function LandlordInfoCard({ landlord, loading }) {
  let content = <div />;
  if (!loading) {
    const url = `/landlords/${landlord._id}`;

    const locations =
      landlord.location.length > 1
        ? `${landlord.location
          .slice(0, -1)
            .join(', ')} and ${landlord.location.slice(-1)}`
        : landlord.location;
    content = (
      <Wrapper>
        <H1>
          <LandlordLink to={url}>{landlord.name}</LandlordLink>
        </H1>
        <H2>
          Has {landlord.numTenants} tenants in {locations}
        </H2>
      </Wrapper>
    );
  }
  if (loading) {
    content = <h1>loading</h1>;
  }
  return content;
}
LandlordInfoCard.propTypes = {
  loading: PropTypes.bool,
  landlord: PropTypes.object,
};
export default LandlordInfoCard;
