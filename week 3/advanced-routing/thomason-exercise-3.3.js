/*
============================================
; Title:  Exercise 3.3
; File Name: thomason-exercise-3.3.js
; Author: William Thomason
; Date:   7 March 2019
; Description: Hello World
;===========================================
*/

//HEADER
const header = require('../../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 3.3") + "\n");

//Start of program

//Requireing dependencies and store them into variables
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

//Sets Express path to ejs template files
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));

//Gets the employeeId from the rout request parses it and stores it into a variable called employeeId
app.get("/:employeeId", function(request, response) {
  var employeeId = parseInt(request.params.employeeId, 10);

  //Takes employeeId and sends it in the response to the webpage to be displayed on index.ejs
  response.render("index", {
    employeeId: employeeId
  });
});

//Creats server
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
