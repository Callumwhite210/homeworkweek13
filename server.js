//Dependencies
let express = require("express");

let app = express();

let PORT = process.env.PORT || 8080;

const exphbs = require("express-handlebars");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);
//Shows server is running
app.listen(PORT, function() {
    console.log(`App now listening on localhost:`+ PORT);
});