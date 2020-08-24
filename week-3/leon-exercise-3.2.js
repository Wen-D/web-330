/* ============================================
; Title: Assignment 3.2 - Factory Pattern
; Author: Professor Krasso
; Date: 21 August 2020
; Modified By: Wendy Leon
; Description: 3.2 - Factory Pattern
;=========================================== */

var header = require('../header.js');

var header = require('../header.js');
console.log(header.display("Wendy", "Leon", "Exercise 3.2 - Factory Pattern"));
console.log('\n');

/*

Output the results
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }
*/

// start program

function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

//Create two (2) new Database classes, Oracle and Informix.
//The Oracle classes constructor will take one argument (properties array)
//The Oracle class should have four (4) properties, username, password, server, and version

function Oracle (properties) {
    this.username = properties.username || "o-admin";
    this.password = properties.password || "o-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 3.5;
}

// The Informix classes constructor will take one argument (properties array)
// The Informix class should have three (3) properties, username, password, and server

function Informix (properties){
    this.username = properties.username || "i-admin";
    this.password = properties.password || "i-secret";
    this.server = properties.server || "localhost:3000";
}

//Update the createDatabase functions if…else block to handle the two newly 
//created classes

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    else if (properties.databaseType === "Oracle") {
        this.databaseType = Oracle;
    }
    else if (properties.databasetype === "Informix"){
        this.databaseClass.Type = Informix;
    }
    else {
        this.databaseClass = MySql;
    }

    return new this.databaseClass(properties);
};

// create a new oracleFactory and call the createDatabase prototype function 
// (supply your own default values)

// Create a new informixFactory and call the createDatabase prototype function 
// (supply your own default values)


var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

var oracleFactory = new DatabaseFactory ();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "oracle-admin",
    password: "oracle-pass",
    server: "localhost:3000"
});

var informixFactory = new DatabaseFactory ();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "imix-admin",
    password: "imix-pass",
    server: "localhost:8080"
});
// output the results
console.log(oracle);
console.log(informix)

// end program
