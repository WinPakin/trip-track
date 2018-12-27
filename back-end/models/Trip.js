const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema({
    tripname: {
        type: String,
        required: true
    },
    members: [{ type: Schema.Types.ObjectId, ref: 'users', required: true}]
});

module.exports = mongoose.model('trips', TripSchema);