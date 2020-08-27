import React from 'react';
import PropTypes from 'prop-types';

import CustomLink from 'components/CustomLink';
import Item from './Item';
import Wrapper from './Wrapper';

function DropdownItem(props) {
  return (
    <CustomLink tag={Wrapper} to={props.to} onClick={props.callback}>
      <Item>{props.children}</Item>
    </CustomLink>
  );
}

DropdownItem.propTypes = {
  to: PropTypes.string,
  callback: PropTypes.func,
  children: PropTypes.any,
};

export default DropdownItem;
