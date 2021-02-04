const Validator = require('validator');
const isEmpty = require('is-empty');
module.exports = function validateLandlordAdd(input) {
  const errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  const data = input;
  data.name = !isEmpty(data.name) ? data.name : '';
  data.type = !isEmpty(data.type) ? data.type : '';
  data.location = !isEmpty(data.location) ? data.location : '';

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }
  // Type checks
  if (Validator.isEmpty(data.type)) {
    errors.type = 'Type field is required';
  } else if (!(data.type === 'landlord' || data.type === 'property manager')) {
    errors.type = 'Type must be landlord or property manager';
  }
  // Location checks
  if (!Validator.isAlphanumeric(data.location)) {
    errors.location = 'Location field must be alphanumeric characters only';
  }
  if (Validator.isEmpty(data.location)) {
    errors.location = 'Location field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
