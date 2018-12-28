const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema({
    tripname: {
        type: String,
        required: true
    },
    members: [{ type: String, required: true}]
});

module.exports = mongoose.model('trips', TripSchema);