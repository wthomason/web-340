/*
============================================
; Title:  Assignment 3.4
; File Name: thomason-assignment-3.4.js
; Author: William Thomason
; Date:   7 March 2019
; Description: Putting it all together
;===========================================
*/

//HEADER
const header = require('../../thomason-header.js');
console.log(header.display("William", "Thomason", "Assignment 3.4") + "\n");

//Start of program

//Requireing all the dependencies
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

//telling express where to find the template files
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//setting morgan logger with the "short" parameter
app.use(logger("short"));

//defining routes and sending the response of what ejs template file to use wit a message.
app.get("/", function(request, response) {

    response.render("index", {

        message: "home page"

    });

});

app.get("/about", function(request, response) {

    response.render("about", {

        message: "about page"

    });

});

app.get("/contact", function(request, response) {

    response.render("contact", {

        message: "contact page"

    })

});

app.get("/products", function(request, response) {

   response.render("products", {

       message: "products page"

   });

});


//starting server on localhost:8080
http.createServer(app).listen(8080, function() {

   console.log("Application started on port 8080.");

});

//END PROGRAM
