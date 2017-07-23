var express = require("express");
var path = require("path");
var app = express();
//I need the body-parser and routes module
var bodyParser = require("body-parser");
var routes = require("./exam/routes/routes");
var mongoose = require("mongoose")

app.use("/client", express.static(path.join(__dirname, "exam/client")));
app.use("/templates", express.static(path.join(__dirname, "exam/client/templates")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

routes(app)

//I can't seem to direct to my routes but I am running, can you link me to my routes? Please input the routes in this file.

app.listen(8080) 
mongoose.connect("mongodb://localhost/exam");//What Port should I listen on? Please put the port in between the parantheses