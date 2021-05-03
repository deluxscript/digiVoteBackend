const mongoose = require('mongoose');

const ballotSchema = new mongoose.Schema({
    ballotId: {
        type: Number,
        default: 0,
        unique: true,
        required: true
    },
    bodyName: {
        type: String
    },
    contractAddress: {
        type: String
    },
    adminEmail: {
        type: String,
        unique: true
    },
    bodyLoc: {
        type: String
    },
    note: {
        type: String
    }
})

const ballot = mongoose.model('ballot', ballotSchema);

module.exports = ballot;