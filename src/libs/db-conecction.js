const mongoose = require('mongoose');

let db;

module.exports = function Connection() {

    if (!db) {
        //  db = mongoose.createConnection('mongodb://127.0.0.1:27017/crud-example', {
        db = mongoose.createConnection('mongodb://127.0.0.1:27017/crud-example', {
            //useMongoClient: true

            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
    return db;
    //return db= mongoose.connection;
}