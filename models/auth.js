const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        minlength: 3,
        maxlength: 50,
    },
    password: {
        type: String,
        required: [true, 'Please provide an valid password'],
        minlength: 3,
    },
    userType: {
        type: String,
        default: "user",
        enum: {
            values: ["student", "admin"],
            message: '{VALUE} is not supported',
        }
    },
});

module.exports = mongoose.model('User', UserSchema);