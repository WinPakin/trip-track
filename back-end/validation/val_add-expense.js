const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateAddExpenseInput(data) {
  let errors = {};
    //      tripname: "5c236e8435163e19b8eda2bd",
    //      chargeAmount: 50,
    //      chargeType: "perPerson",
    //      chargedPersons: ["5c23610dd01", "716393"],
    //      category: "food",
    //      ExpenseName: "Ramen"



  data.expenseName = !isEmpty(data.expenseName) ? data.expenseName : '';
  data.chargeAmount = !isEmpty(data.chargeAmount) ? data.chargeAmount : '';
  data.chargedPersons = !isEmpty(data.chargedPersons) ? data.chargedPersons : '';
  

  if (!Validator.isLength(data.expenseName, { min: 2, max: 20 })) {
    errors.expenseName = 'Expense name must be between 2 and 20 characters';
  }

  if (Validator.isEmpty(data.expenseName)) {
    errors.expenseName = 'Expense name field is required.';
  }
  if (/\s/.test(data.expenseName)) { 
    errors.expenseName = 'Expense name cannot contain spaces.';
  }
  if (Validator.isEmpty(data.chargeAmount)) {
    errors.chargeAmount = 'Charge Amount field is required.';
  }

  if (isNaN(data.chargeAmount)){
      errors.chargeAmount = 'Your charge amount must be a number.'
  }

  if (Validator.isEmpty(data.chargedPersons)) {
    errors.chargedPersons = 'You must charge at least one person.';
  }



  return {
    errors,
    isValid: isEmpty(errors)
  };
};