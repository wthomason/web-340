/*
============================================
; Title:  Exercise 5.3
; File Name: thomason-exercise-5.3.js
; Author: William Thomason
; Date:   22 March 2019
; Description: pug-template
;===========================================
*/

//HEADER
const header = require('../../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 5.3") + "\n");

//start program

var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

var app = express();


app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");


app.get("/", function(request, response) {

    response.render("index", {

        message: "Powered by the PUG!"

    });

});


http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});

//end program
