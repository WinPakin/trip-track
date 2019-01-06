const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateJoinTripInput(data) {
  let errors = {};

  data.tripname = !isEmpty(data.tripname) ? data.tripname : '';

  if (Validator.isEmpty(data.tripname)) {
    errors.tripID = 'Trip ID field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};