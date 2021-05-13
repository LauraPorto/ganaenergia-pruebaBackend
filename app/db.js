const mongoose = require ('mongoose');

const MONGO_URL = process.env.MONGO_URL;
const QUERY_STRING = `${MONGO_URL}`;
const db = mongoose.connect(QUERY_STRING, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = db.then((result) => {
    console.log('database connection success');
    return result;
});