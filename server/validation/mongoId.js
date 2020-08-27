const Validator = require('validator');
const isEmpty = require('is-empty');
module.exports = function validateMongoId(input) {
  const errors = {};
  const data = input;
  // Convert empty fields to an empty string so we can use validator functions
  data.id = !isEmpty(data.id) ? data.id : '';
  // Email checks
  if (Validator.isEmpty(data.id)) {
    errors._id = 'Search requires at least one character';
  } else if (!Validator.isMongoId(data.id)) {
    errors.id = 'Name is invalid';
  }
  // Password checks
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
