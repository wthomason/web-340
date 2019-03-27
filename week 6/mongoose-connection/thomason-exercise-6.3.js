/*
============================================
; Title:  Exercise 6.3
; File Name: thomason-exercise-6.3.js
; Author: William Thomason
; Date:   25 March 2019
; Description: pug-template
;===========================================
*/

//HEADER
const header = require('../../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 6.3") + "\n");

//start program
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

var mongoDB = "mongodb+srv://web340:webdev340@ems-wrvq5.mongodb.net/test?retryWrites=true";


mongoose.connect(mongoDB, {
    useMongoClient: true
});


mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

var app = express();
app.use(logger('dev'));

http.createServer(app).listen(5000, function(){
    console.log("Application started on port 5000");
});

//END PROGRAM