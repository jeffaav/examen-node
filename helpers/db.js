'use strict';

const mongodb = require('mongodb');
const client = new mongodb.MongoClient();
const config = require('../config.json');

const database = Symbol();

class DB {

    constructor() {
        this.persons = null;
        this[database] = null;
    }

    connect() {
        return new Promise((resolve, reject) => {
            if (this[database])
                resolve();
            else 
                client.connect(config.mongodb, (err, db) => {
                    if (err)
                        reject(err);
                    else {
                        this[database] = db;
                        this.persons = db.persons;
                        console.log('connection opened!');
                        resolve();
                    }
                })
        });
    }

    close() {
        if (this[database])
            this[database].close()
                .then(() => console.log('connection closed!'))
                .catch(err => console.log(err));
    }
}

module.exports = DB;
