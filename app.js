"use strict";

// ejm:
var mongo = require('./helpers/mongo');
var db = new mongo.DB();

db.connect().then(function () {
    console.log(db.persons)
});