const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateAddTripInput(data) {
  let errors = {};

  data.tripname = !isEmpty(data.tripname) ? data.tripname : '';


  if (!Validator.isLength(data.tripname, { min: 2, max: 20 })) {
    errors.tripname = 'Tripname must be between 2 and 20 characters';
  }

  if (Validator.isEmpty(data.tripname)) {
    errors.tripname = 'Tripname field is required';
  }
  if (/\s/.test(data.tripname)) { 
    errors.tripname = 'Tripname cannot contain spaces';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};