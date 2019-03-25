/*
============================================
; Title:  Exercise 6.3
; File Name: thomason-exercise-6.3.js
; Author: William Thomason
; Date:   22 March 2019
; Description: pug-template
;===========================================
*/

//HEADER
const header = require('../../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 6.3") + "\n");

//start program

var mongoose = require(“mongoose”);
var mongoDB = " mLab connection string>";


mongoose.connect(mongoDB, {
    useMongoClient: true
});


mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

//END PROGRAM