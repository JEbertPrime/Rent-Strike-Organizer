import React from 'react';
import PropTypes from 'prop-types';

import Ul from './Ul';
import Wrapper from './Wrapper';

function List(props) {
  const ComponentToRender = props.component;
  let content = <div />;

  // If we have items, render them
  if (props.items) {
    content = props.items.map(item => (
      <ComponentToRender key={`item-${item._id}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  return (
    <Wrapper display={props.display} nav={props.nav}>
      <Ul nav={props.nav}>{content}</Ul>
    </Wrapper>
  );
}

List.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array,
  display: PropTypes.string,
  nav: PropTypes.bool,
};

export default List;
