'use strict';
var util = require('util');

module.exports = {

  film: film
};

function film(req, res) {

  var number = req.swagger.params.name.value || 'first';
  var film = util.format(number, 'film, %s!' );

  res.json(film);
}