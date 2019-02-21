/*
============================================
; Title:  Assignment 1.5
; File Name: thomason-assignment-1.5.js
; Author: William Thomason
; Date:   19 February 2019
; Description: Hello World
;===========================================
*/

//HEADER
const header = require('../thomason-header.js');
console.log(header.display("William", "Thomason", "Assignment 1.5") + "\n");

//Variable declaration:

var http = require("http");

function processRequest(req, res) {

var body = "Hello World! Welcome to my first web server!!!";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);