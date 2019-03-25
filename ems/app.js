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


app.use(logger("short"));


app.get("/", function (request, response) {
    response.render("index", {

        title: "Home page"

    });
});


http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});

//PROGRAM END
