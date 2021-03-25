// module.exports = function () {

//        var db = require('../libs/db-conecction')();

//         var Schema = require('mongoose').Schema;
//         //var mongoose = require('mongoose'); 
//         var Task = mongoose.Schema({
//             title: String,
//             description: String,
//             status: Boolean


//         });
//         return db.mongoose.model('task', Task);



// }
module.exports = function () {

    var db = require('../libs/db-conecction')();
    var Schema = require('mongoose').Schema;

    var Task = Schema({
        title: String,
        description: String,
        status: Boolean
    });
    return db.model('tasks', Task);
}

