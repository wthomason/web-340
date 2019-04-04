/*
============================================
; Title:  Exercise 7.3
; File Name: thomason-fruits.js
; Author: William Thomason
; Date:   4 April 2019
; Description: Chai-Example
;===========================================
*/

//HEADER
const header = require('../../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 7.3") + "\n");

//start program

//FRUITS FUNCTION THAT ACCEPTS A STRING AND RETURNG THE STRING AS AN ARRAY
function fruits(str) {

    return str.split(',');

}

module.exports = fruits;

//END PROGRAM