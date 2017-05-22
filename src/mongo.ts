import { MongoClient, Db, Collection } from 'mongodb';
import { Promise } from 'es6-promise';


const config = require('../config.json') as Config;
const client = new MongoClient();


class Config {
    mongodb: string
}

export class DB {
    private _db: Db
    private _persons: Collection

    get persons(): Collection {
        return this._persons;
    }

    connect(): Promise<void> {
        if (this._persons)
            return Promise.resolve<void>();

        return client.connect(config.mongodb)
            .then(db => {
                this._db = db.db('examen');
                this._persons = this._db.collection('persons');
                console.log('connection done');
            })
            .catch(err => console.log(err)); 
    }

    close(): void {
        this._db.close()
            .then(() => console.log('connection closed!'))
            .catch(err => console.log(err))
    }
}