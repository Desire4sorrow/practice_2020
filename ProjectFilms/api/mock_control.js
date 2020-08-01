'use strict';

module.exports = {
    get: get
};

function get(req, res, next) {

    res.json([
        {
            "id": "324sd903w4rfa034jaf",
            "name": "Lord of the Rings",
            "producer": "Peter Jackson",
            "year": 2003
        },

        {
            "id": "324s53w4rfa0sd34jaf",
            "name": "Avengers",
            "producer": "Johns Weedon",
            "year": 2012
        },

        {
            "id": "324s53w4rf1a0d34jaf",
            "name": "Transformers",
            "producer": "Michael Bay",
            "year": 2007
        },

        {
             "id": "324s51w4rf1a0d34jaf",
             "name": "Island",
             "producer": "Michael Bay",
             "year": 2005
        }
    ]);
}