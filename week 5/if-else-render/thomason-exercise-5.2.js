/*
============================================
; Title:  Exercise 5.2
; File Name: thomason-exercise-5.2.js
; Author: William Thomason
; Date:   22 March 2019
; Description: if else render
;===========================================
*/

//HEADER
const header = require('../../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 5.2") + "\n");

//START OF PROGRAM

var express = require("express");
var http = require("http");
var path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//VARIABLES
var n = [

  "Tyson",

  "Noah",

  "Jeremiah",

  "James"

];

//ROUTE RETURNING INDEX
app.get("/", function(request, response) {

    response.render("index", {

        names: n

    })

});


//CREATE SERVER ON PORT 8080
http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});

//END OF PROGRAM
