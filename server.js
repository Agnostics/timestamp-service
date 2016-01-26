'use strict';

var express = require('express'),
    timestamp = require('./app/timestamp.js');

var app = express();

timestamp(app);

app.use('/public', express.static(process.cwd() + '/public'));

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Listening on port 3000...');
});