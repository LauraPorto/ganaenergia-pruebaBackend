const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const userSchema = mongoose.Schema({
    articleId : {
        type: ObjectId,
        ref: 'Article'
    },
    username : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    creationDate: {
        type: Date
    }
});

const User = mongoose.model('user', userSchema);
module.exports = User;