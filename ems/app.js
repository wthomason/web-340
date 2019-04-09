/*
============================================
; Title:  EMS
; File Name: app.js
; Author: William Thomason
; Date:   22 March 2019
; Description: ems
;===========================================
*/

//HEADER
const header = require('../thomason-header.js');
console.log(header.display("William", "Thomason", "EMS") + "\n");

//PROGRAM START

/*
 *SETTING VARIABLES
 *require statements  
 */
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var mongoose = require("mongoose");

//mongoDB conection string
var mongoDB = "mongodb+srv://web340:webdev340@ems-wrvq5.mongodb.net/test?retryWrites=true";

// initialize express
var app = express();


/*
 *USE STATEMENTS  
 */
//useing exprss dirname to public for custom javascript files and css files
app.use(express.static(__dirname + '/public'));
app.use(helmet.xssFilter());
//setting the morgan logger settings
app.use(logger("short"));


/*
 *SET STATEMENTS  
 */
//setting pat of view for tpl files and view engine as ejs
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");


/*
 *ROUTES  
 */ 
app.get("/", function (request, response) {
    response.render("index", {

        title: "Hunting Camp",
        message: "Welcome to Hunting Camp",
        headingTitle: "Hunting Camp Were You Find All Things Hunting"

    });
});

/*
 *Conecting to mongoDB  
 */
mongoose.connect(mongoDB, {
    useMongoClient: true
});


mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

//Create server
http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});

//PROGRAM END
