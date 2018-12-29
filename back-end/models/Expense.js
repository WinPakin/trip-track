const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    tripname: {
        type: String,
        required: true
    },
    charger: {
        type: String,
        required: true
    },
    chargeAmount: {
        type: Number,
        required: true
    },
    chargedPerson: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    expenseName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('expenses', ExpenseSchema);