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

/*
 *SETTING VARIABLES
 *require statements
 */
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var Employee = require("./models/employee");
var helmet = require("helmet");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");


// setup csrf protection
var csrfProtection = csrf({cookie: true});

//mongoDB conection string
var mongoDB = "mongodb+srv://web340:webdev340@ems-wrvq5.mongodb.net/test?retryWrites=true";

// initialize express
var app = express();


/*
 *USE STATEMENTS
 */
//useing exprss dirname to public for custom javascript files and css files
app.use(express.static(__dirname + '/public'));

app.use(helmet.xssFilter());

//setting the morgan logger settings
app.use(logger("short"));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());

app.use(csrfProtection);

app.use(function(request, response, next) {
    var token = request.csrfToken();

    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;

    next();
});


/*
 *SET STATEMENTS
 */
//setting pat of view for tpl files and view engine as ejs
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");


/*
 *CONECTING TO mongoDB
 */
mongoose.connect(mongoDB, {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
});


/*
 *ROUTES
 */
app.get("/", function (request, response) {
    response.render("index", {

        title: "Hunting Camp",
        message: "Welcome to Hunting Camp",
        headingTitle: "Hunting Camp Were You Find All Things Hunting"

    });
});

app.get("/new", function (request, response) {
    response.render("new", {
        title: "Hunting Camp",
        message: "Add New Employee"
    });
});

app.post("/process", function(request, response) {

   // get the request's form data
   var employeeFirstName = request.body.txtFirstName;
   var employeeLastName = request.body.txtLastName;

   console.log(employeeFirstName + " " + employeeLastName);

   // create a employee model
   var employee = new Employee({
       firstName: employeeFirstName,
       lastName: employeeLastName
   });

   // save
   employee.save(function (error) {
       if (error){
          throw error;
          console.log(error);
       }
       else{
       console.log(employeeFirstName + " " + employeeLastName + " saved successfully!");
       }
   });
    //console.log(request);
    //console.log(request.csrfToken);
    response.redirect("/");

});

app.get("/list", function(request, response) {
  Employee.find({}, function(error, employee) {
     if (error) throw error;

     response.render("list", {
      title: "Hunting Camp",
      message: "Employee List",
      employee: employee
     });
  });
});

app.get("/view/:queryName", function (request, response) {

    var queryName = request.params.queryName;

    Employee.find({'firstName': queryName}, function(error, employee) {

        if (error) throw error;

        console.log(employee);

        if (employee.length > 0) {

            response.render("view", {
                title: "Hunting Camp",
                message: "Employee Record",
                employee: employee

            })
        }

        else {
            response.redirect("/list")
        }
    });
});


//CREATE SERVER
http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});

//PROGRAM END
