'use strict';
//model of description
var mongoose = require('mongoose');
var Planing = mongoose.Planing;
var FilmSchema = new Schema({
    name: String,
    producer: String,
    year: Number
});

var film = mongoose.model('Film', FilmSchema);

module.exports = Film;