const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const articleSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        default: 2.5
    },
    creationDate: {
        type: Date
    }
});

const Article = mongoose.model('article', articleSchema);
module.exports = Article;