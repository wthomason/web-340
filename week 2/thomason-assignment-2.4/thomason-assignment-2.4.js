/*
============================================
; Title:  Assignment 2.4
; File Name: thomason-assignment-2.4.js
; Author: William Thomason
; Date:   27 February 2019
; Description: EJS Views
;===========================================
*/

//HEADER
const header = require('../../thomason-header.js');
console.log(header.display("William", "Thomason", "Assignment 2.4") + "\n");

//Start of program

//requiring needed modules
var http = require("http");
var express = require("express");
var path = require("path");

//creating express app
var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.get("/", function (request, response) {
    response.render("index", { //returns HTML 
        name:"William",
        lastName:"Thomason",
        address:"3811 16th Street"
    });
});

http.createServer(app).listen(8080, function () { //start server
    console.log("Application started on port 8080.");
});

//End Program