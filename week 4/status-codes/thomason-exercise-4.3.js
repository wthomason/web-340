/*
============================================
; Title:  Exercise 4.3
; File Name: thomason-exercise-4.3.js
; Author: William Thomason
; Date:   15 March 2019
; Description: HTTP Status Codes
;===========================================
*/

//HEADER
const header = require('../../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 4.3") + "\n");

//Start of program

//requiring express, http
var express = require("express");

var http = require("http");

var app = express(); //setting express to variable app

//begining of routes giving the response of a status code error then a error message in json
app.get("/not-found", function(request, response) {

    response.status(404);

    response.json({

        error: "Sorry we couldn't find it. ERROR 404!"

    })

});

app.get("/ok", function(request, response) {

    response.status(200);

    response.json({

        message: "Yay it worked! STATUS 200"

    })

});

app.get("/not-implemented", function(request, response) {

    response.status(501);

    response.json({

        error: "Sorry page not implemented. STATUS 501"

    })

});

//start server
http.createServer(app).listen(8080, function() {

   console.log("Application started on port 8080!");

});

//end of program