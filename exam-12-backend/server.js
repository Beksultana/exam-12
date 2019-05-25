const mongoose = require('mongoose');
const express = require('express');
const config = require('./config');
const cors = require('cors');

const users = require('./app/users');

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

const port = 8000;

mongoose.connect(config.dbUrl, config.mongoOptions).then(() => {

    app.use('/users', users);

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });

});