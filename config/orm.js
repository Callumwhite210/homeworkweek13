const connection = require("./connection")

let connection = require("./connection.js");

//
const orm = {
    selectAll: function(cb){
        const query = connection.query("SELECT * FROM burger", function(err, res){
            if (err) 
            {throw err};
            cb(res);
        });
        console.log(query);
    },
    //inserts burger into table 
    insertOne: function(burgerName, cb){
        const query = connection.query("INSERT INTO burger (burger_name) VALUES (?)", burgerName, function(err, res){
            if (err) 
            {throw err};
            cb(res);
        });
        console.log(query);
    },
    //updates table with new burger
    updateOne: function(columnName, valueToUpdate, id, cb){
        const query = connection.query("UPDATE burger SET ??=? WHERE id=?", [columnName, valueToUpdate, id], function(err, res){
            if (err) 
            {throw err};
            cb(res);
        });
        console.log(query);
    }
}


module.exports = orm;