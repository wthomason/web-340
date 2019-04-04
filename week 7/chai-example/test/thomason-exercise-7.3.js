/*
============================================
; Title:  Exercise 7.3
; File Name: thomason-exercise-7.3.js
; Author: William Thomason
; Date:   4 April 2019
; Description: Chai-Example
;===========================================
*/

//HEADER
const header = require('../../../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 7.3") + "\n");

//start program

//REQUIRING THE thomason-fruits.js FILE
var fruits = require("../thomason-fruits");

//REQUIRING chai
var chai = require("chai");

//STORING THE ASSERTAION LIBRARY INTO A VARIABLE
var assert = chai.assert;

//TEST
describe("fruits", function() {

    it("should return an array of fruits", function() {

        var f = fruits('Apple,Orange,Mango');

        assert(Array.isArray(f));

    });

});

//END PROGRAM