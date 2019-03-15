/*
============================================
; Title:  Exercise 4.2
; File Name: thomason-exercise-4.2.js
; Author: William Thomason
; Date:   15 March 2019
; Description: JSON API's
;===========================================
*/

//HEADER
const header = require('../../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 4.2") + "\n");

var express = require("express");

var http = require("http");

var app = express();


app.get("/vehicle/:id", function (req, res) {

    var id = parseInt(req.params.id, 10);

    res.json({

        make: "Chevy",

        model: "Silverado 2500",

        type: "Truck",

        vehicleId: id

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});