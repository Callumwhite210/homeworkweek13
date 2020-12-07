//Dependencies
const express = require("express");
const PORT = process.env.PORT || 8000;
const app = express();


app.use("/public",express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burger_controller.js");

//Server is running
app.use(routes);
app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});


 
