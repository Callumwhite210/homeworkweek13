const orm = require("../config/orm");

let burgers = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(burgerName, cb){
        orm.insertOne("burgers", "burger_name", burgerName, function(res){
            cb(res);
        });
    },
    updateOne: function(burgerName, cb){
        orm.updateOne("burgers", "burger_name", burgerName, function(res){
            cb(res);
        });
    }
};

module.exports = burgers;