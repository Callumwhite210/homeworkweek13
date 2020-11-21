let connection = require("./connection.js");

//
let orm = {
    selectAll: function(tableName, cb){
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, res){
            if(err) throw err;
            cb(res);
        })
        console.log(query);
    },
    //inserts burger into table 
    insertOne: function(tableName, colName, burgerName, cb){
        let queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableName, colName, burgerName], function(err, result) {
            if(err) throw err;
            cb(result); 
        });
    },
    //updates table with new burger
    updateOne: function(tableName, colName, burgerName, cb) {
        let queryString = "UPDATE ?? SET devoured = true WHERE ?? = ?";
        connection.query(queryString, [tableName, colName, burgerName], function(err, result) {
            if(err) throw err;
            cb(result);
        });       
    }
};


module.exports = orm;