/*
============================================
; Title:  Exercise 2.3
; File Name: thomason-exercise-2.3.js
; Author: William Thomason
; Date:   27 February 2019
; Description: Routes
;===========================================
*/

//HEADER
const header = require('../../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 2.3") + "\n");

//Start of program

//Variable declaration:
var express = require('express');
var http = require('http');

var app = express();

//routes
app.get('/', function(req, res) {
    res.end('Welcome to the homepage.\n');
});

app.get('/about', function(req, res) {
    res.end('Welcome to the about page.\n');
});

app.get('/contact', function(req, res) {
    res.end('Welcome to the contact page.\n');
});

app.use(function(req, res) {
    res.statusCode = 404;
    res.end('Error 404 Page Not found!');
});

http.createServer(app).listen(3000, function(){
    console.log('Application started on port %s', 3000);
})

//End of Program