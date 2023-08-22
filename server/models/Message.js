const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    nachricht: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Message', MessageSchema);
