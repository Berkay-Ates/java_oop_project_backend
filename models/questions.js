const mongoose = require('mongoose');

const QuestionsSchema = new mongoose.Schema({
    a: {
        type: Number,
        required: [true, 'Please provide a name'],
    },
    b: {
        type: Number,
        required: [true, 'Please provide a name'],
    }
});

module.exports = mongoose.model('Questions', QuestionsSchema);