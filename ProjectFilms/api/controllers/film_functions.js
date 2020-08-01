'use strict';

var film = require('../model');

//usage logic as error - uncompleted - completed
module.exports = {
    get: get,
    creating: creating,
    finding: finding,
    removing: removing
};

function get(req, res) {
    film.find({}, function (err, films) {
        if (err)
        {
            throw err;
        }
        else
        {
            res.json(films);
        }
    });
}

function creating(req, res) {
    var NewFilm = film(req.swagger.params.film.value);
    NewFilm.save(function (err) {
        if (err)
        {
            throw err
        }
        else
        {
            res.json({message: 'Created'});
        }
    });
}

function finding(req, res) {
    var FilmId = req.swagger.params.id.value;
    film.findById(FilmId, function (err, film) {
        if (err)
        {
            throw err;
        }
        else if (!film)
        {
            res.status(404).json({message: 'Not found'})
        }
        else
        {
            res.json({name: film.name, producer: film.producer, year: film.year});
        }
    });
}


function removing(req, res) {
    var FilmId = req.swagger.params.id.value;
    film.findByIdAndRemove(FilmId, function (err) {
        if (err)
        {
            throw err;
        }
        else
        {
            res.json({message: 'Removed'});
        }
    });
}

