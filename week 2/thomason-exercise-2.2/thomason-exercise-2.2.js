/*
============================================
; Title:  Exercise 2.2
; File Name: thomason-exercise-2.2.js
; Author: William Thomason
; Date:   27 February 2019
; Description: Hello World
;===========================================
*/

//HEADER
const header = require('../../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 2.2") + "\n");

//Start of program

//Variable declaration:
var express = require('express');
var http = require('http');


var app = express();

app.use(function(req, res){
    console.log("In comes a request to: %s", req.url);

    res.end("\n Hello World \n");
});


http.createServer(app).listen(8080, function(){
    console.log('Application started on port %s', 8080);
})

//End of program