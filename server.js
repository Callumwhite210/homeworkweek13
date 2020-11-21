//Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("/public",express.static(path.join(__dirname, "public"))));
app.use(express.urlencoded({extended: true}));
app.use(express.json);

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burger_controller.js");

app.use(routes);

//Shows server is running
app.listen(PORT,() => {
    console.log(`App listening on localhost:${PORT}`);
});