/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Login';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Solidarity Forever.',
  },
  trymeMessage: {
    id: `${scope}.trymeMessage`,
    defaultMessage: 'Search for a landlord',
  },
  trymeAtPrefix: {
    id: `${scope}.trymeAtPrefix`,
    defaultMessage: 'Search...',
  },
});
