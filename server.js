const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded( { extended : true } ));
app.use(express.json());

const PORT = process.env.PORT || 3000;

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgerController");
app.use(routes);

app.listen(PORT, (req,res)=>{
    console.log("Listening to Port " + PORT)
});