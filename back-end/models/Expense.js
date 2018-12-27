const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    tripname: {
        type: Schema.Types.ObjectId,
        ref: 'trips',
        required: true
    },
    charger: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    chargeAmount: {
        type: Number,
        required: true,
    },
    chargedPerson: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
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