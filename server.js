'use strict';

/*
 * nodejs-express-mongoose
 * Copyright(c) 2015 Madhusudhan Srinivasa <madhums8@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies
 */

const fs = require('fs');
const join = require('path').join;
const express = require('express');
const passport = require('passport');

const modelsPath = join(__dirname, 'app/models');
const models = require('./app/models');
const port = process.env.PORT || 1337;

const app = express();

/**
 * Expose
 */

module.exports = {
  app
};

// Bootstrap models
fs.readdirSync(modelsPath)
  .filter(file => ~file.indexOf('.js'))
  .forEach(file => require(join(modelsPath, file)));

// Bootstrap routes
require('./config/passport')(passport);
require('./config/express')(app, passport);
require('./config/routes')(app, passport);

// app.listen(port);
// console.log('Express app started on port ' + port);
models.sequelize.sync().then(function () {
  var server = app.listen(port, function() {
    debug('Express server listening on port ' + server.address().port);
  });
});
