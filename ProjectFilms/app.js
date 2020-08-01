'use strict';

var SwaggerExpress = require('swagger-express-mw');
var mongoose = require('mongoose');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  mongoose.connect('mongodb://localhost/films);

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

});
