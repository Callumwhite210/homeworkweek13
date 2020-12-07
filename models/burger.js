const orm = require("../config/orm");

let burgers = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(burgerName, cb){
        orm.insertOne(burgerName, function(res){
            cb(res);
        });
    },
    updateOne: function(columnName, value, id, cb){
        orm.updateOne(columnName, value, id, function(res){
            cb(res);
        });
    }
};

module.exports = burgers;