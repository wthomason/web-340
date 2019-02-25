/*
============================================
; Title:  Exercise 1.3
; File Name: thomason-exercise-1.3.js
; Author: William Thomason
; Date:   19 February 2019
; Description: Modules
;===========================================
*/

//HEADER
const header = require('../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 1.3") + "\n");

var url = require('url');

var parsedURL = url.parse('https://www.williamthomason.info/profile?name=tyson');

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);