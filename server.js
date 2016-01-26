'use strict';

var express = require('express'),
    timestamp = require('./app/timestamp.js');

var app = express();

timestamp(app);

app.use('/public', express.static(process.cwd() + '/public'));

app.listen(3000, function () {
    console.log('Listening on port 3000...');
});