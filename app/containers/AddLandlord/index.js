/*
 * Register
 *
 * at the '/register' route
 * Needed Components: Input, Submit
 * Needed Actions: login
 */
// Sagas
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Redirect } from 'react-router';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectToken,
} from 'containers/App/selectors';
import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// Components imports
import LoadingIndicator from 'components/LoadingIndicator';
import Input, {Label} from 'components/Input';
import Button from 'components/Button';
import {Wrapper, InlineWrapper as Inline} from './Wrappers.js'
import ErrorMessage from 'components/ErrorMessage';
import { addLandlord } from 'containers/App/actions';
import Form from './Form';
import saga from './saga';
import reducer from './reducer';
import {
  changeName,
  changeType,
  changeLocation,
} from './actions';
import { makeSelectNewLandlord } from './selectors';
const key = 'addLandlord';

export function AddLandlord({
  loading,
  error,
  newLandlord,
  token,
  onSubmitForm,
  onChangeType,
  onChangeLocation,
  onChangeName,
}) {
  const [errors, setErrors] = useState({});
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  if (loading) content = <LoadingIndicator />;
  let content = (
    <Wrapper>
      <Form onSubmit={onSubmitForm}>
        <Input
          id="name"
          type="text"
          placeholder="Landlord Name"
          value={newLandlord.name}
          onChange={onChangeName}
        />
        {errors.name ? <ErrorMessage>{errors.name}</ErrorMessage> : <div />}
      <Inline>
        
        <Label> 
            <Input
          type="radio"
                checked={newLandlord.landlordType === 'landlord'}
          value="landlord"
                
          onChange={onChangeType}
        />
            Landlord</Label>

      
        <Label><Input
          type="radio"
          checked={newLandlord.landlordType === 'property manager'}
          value='property manager'
          onChange={onChangeType}
        />Property Manager</Label>

        {errors.type ? <ErrorMessage>{errors.type}</ErrorMessage> : <div />}
        </Inline>
        <Input
          id="location"
          type="location"
          placeholder="Landlord Location"
          value={newLandlord.location}
          onChange={onChangeLocation}
        />
        {errors.location ? (
          <ErrorMessage>{errors.location}</ErrorMessage>
        ) : (
          <div />
        )}

        <Button type="submit">Add Landlord</Button>
      </Form>
    </Wrapper>
  );
  if (error) {
    error.json.then(value => {
      setErrors(value);
    });
  }
  // When user is authenticated, push to home page

  return content;
}
AddLandlord.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  newLandlord: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  token: PropTypes.string,
  onSubmitForm: PropTypes.func,
  onChangeName: PropTypes.func,
  onChangeType: PropTypes.func,
  onChangeLocation: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newLandlord: makeSelectNewLandlord(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  token: makeSelectToken(),
});
export function mapDispatchToProps(dispatch) {
  return {
    onChangeName: evt => {
      dispatch(changeName(evt.target.value));
    },
    onChangeType: evt => {
        if(evt.target.checked) {
            console.log(evt.target.checked)
       dispatch(changeType(evt.target.value));
    }
      
        
    },
    onChangeLocation: evt => {
      dispatch(changeLocation(evt.target.value));
    },
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(addLandlord());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddLandlord);
