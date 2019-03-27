/*
============================================
; Title:  EMS
; File Name: app.js
; Author: William Thomason
; Date:   22 March 2019
; Description: ems
;===========================================
*/

//HEADER
const header = require('../thomason-header.js');
console.log(header.display("William", "Thomason", "EMS") + "\n");

//PROGRAM START

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");


var app = express();


app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.use(logger("short"));


app.get("/", function (request, response) {
    response.render("index", {

        title: "Hunting Camp",
        message: "Welcome to Hunting Camp",
        headingTitle: "Hunting Camp Were You Find All Things Hunting"

    });
});


http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});

//PROGRAM END
