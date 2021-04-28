const mongoose = require('mongoose');

const voterSchema = new mongoose.Schema({
    ballotId: {
        type: Number,
        default: 0,
        unique: true,
        required: true
    },
    voters: {
        type: Array
    }
})

const voter = mongoose.model('voter', voterSchema);

module.exports = voter;