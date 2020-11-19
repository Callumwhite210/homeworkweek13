const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let objectBurger = {
            burgers: data
        };

        console.log(objectBurger);
        res.render("index", objectBurger);
    });
});

router.post("/api/burgers", function(req, res){
    burger.insertOne(req.body.name, function(result){
        res.json({id: result.id});
    });
});

router.put("api/burgers/:id", function(req, res){
    const burgerID = req.params.id;
    burger.updateOne("devoured", req.body.devoured, burgerID, function(result){
        res.status(200).end();
    });
});

module.exports = router;