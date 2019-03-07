/*
============================================
; Title:  Exercise 3.2
; File Name: thomason-exercise-3.2.js
; Author: William Thomason
; Date:   27 February 2019
; Description: Morgan Logging
;===========================================
*/

//HEADER
const header = require('../../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 3.2") + "\n");


//START PROGRAM
var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));

app.get("/", function (request, response) {

    response.render("index", {

        message: "Welcome to the Morgan Logger Example by William Thomason"

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});
//END PROGRAM
