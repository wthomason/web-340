/*
============================================
; Title:  Assignment 4.4
; File Name: thomason-assignment-4.4.js
; Author: William Thomason
; Date:   15 March 2019
; Description: CRUD
;===========================================
*/

//HEADER
const header = require('../../thomason-header.js');
console.log(header.display("William", "Thomason", "Assignment 4.4") + "\n");

//START PROGRAM

//REQUIRING EXPRESS AND HTTP
var express = require(express);

var http = require(http);

//SETTING EXPRESS TO VARIABLE app
var app = express();

//CREATEING THE REQUEST AND SENDING RESPONSE
app.get("/", function(req, res){
    res.send("Yay we did a GET request!");
});

app.post("/", function(req, res){
    res.send("Yay we did a POST request!");
});

app.put("/", function(req, res){
    res.send("Yay we did a PUT request!");
});

app.delete("/", function(req, res){
    res.send("Yay we did a DELETE request!");
});

//CREATEING SERVER ON PORT 8080
http.createServer(app).listen(8080, function(){
    console.log('Application running on port 8080 \nGo Gettem Tiger!');
});

//END PROGRAM