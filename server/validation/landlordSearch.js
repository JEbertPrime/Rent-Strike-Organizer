const Validator = require('validator');
const isEmpty = require('is-empty');
module.exports = function validateLandlordSearch(input) {
  const errors = {};
  const data = input;
  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : '';
  // Email checks
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Search requires at least one character';
  } else if (!Validator.isAlphanumeric(data.name)) {
    errors.name = 'Name is invalid';
  }
  // Password checks
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
