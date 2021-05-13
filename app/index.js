require('dotenv').config();
const express = require('express');
const router = require('./router');
const app = express();
const db = require('./db');
const cors = require('cors');

const port = 3002;

app.use(express.json());
app.use(cors());
app.use(router);

db.then(() => {
    app.listen(port, () => {
        console.log('Connected !')
    })
}).catch(console.log);