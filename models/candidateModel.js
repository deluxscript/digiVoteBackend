const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    ballotId: {
        type: Number,
        default: 0,
        unique: true,
        required: true
    },
    candidates: {
        type: Array
    }
})

const candidate = mongoose.model('candidate', candidateSchema);

module.exports = candidate;