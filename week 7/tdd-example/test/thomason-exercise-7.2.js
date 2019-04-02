/*
============================================
; Title:  Exercise 7.2
; File Name: thomason-exercise-7.2.js
; Author: William Thomason
; Date:   25 March 2019
; Description: TDD in action
;===========================================
*/

//HEADER
const header = require('../../../thomason-header.js');
console.log(header.display("William", "Thomason", "Exercise 7.2") + "\n");

//start program
var assert = require("assert");

describe("String#split", function() {

    it("should return an array of fruits", function() {

        assert(Array.isArray('Apple,Orange,Mango'.split(',')));

    });

});


function getFruits(str) {

    return str.split(',');

   }

   module.exports = getFruits;
//end program