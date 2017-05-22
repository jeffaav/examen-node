"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var es6_promise_1 = require("es6-promise");
var config = require('../config.json');
var client = new mongodb_1.MongoClient();
var Config = (function () {
    function Config() {
    }
    return Config;
}());
var DB = (function () {
    function DB() {
    }
    Object.defineProperty(DB.prototype, "persons", {
        get: function () {
            return this._persons;
        },
        enumerable: true,
        configurable: true
    });
    DB.prototype.connect = function () {
        var _this = this;
        if (this._persons)
            return es6_promise_1.Promise.resolve();
        return client.connect(config.mongodb)
            .then(function (db) {
            _this._db = db;
            _this._persons = db.collection('persons');
            console.log('connection done');
        })
            .catch(function (err) { return console.log(err); });
    };
    DB.prototype.close = function () {
        this._db.close()
            .then(function () { return console.log('connection closed!'); })
            .catch(function (err) { return console.log(err); });
    };
    return DB;
}());
exports.DB = DB;
