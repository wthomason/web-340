/*
============================================
; Title:  EMS
; File Name: employee.js
; Author: William Thomason
; Date:   4 April 2019
; Description: ems
;===========================================
*/

//HEADER
//const header = require('../thomason-header.js');
//console.log(header.display("William", "Thomason", "EMS") + "\n");

//PROGRAM START

// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Fruit Schema
let employeeSchema = new Schema({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true }
});

// Export the model so its publicly available.
module.exports = mongoose.model('Employee', employeeSchema);

//END PROGRAM
