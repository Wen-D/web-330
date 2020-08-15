/* ============================================
; Title: Assignment 2.2 - Prototypes
; Author: Professor Krasso
; Date: 14 August 2020
; Modified By: Wendy Leon
; Description: Prototypes
;=========================================== */

var header = require('../header.js');

var header = require('../header.js');
console.log(header.display("Wendy", "Leon", "Exercise 2.2 - Prototypes"));
console.log('\n');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'
*/

// start program

//Create an object literal Person with one function getAge()
//person object 
var person = {
    getAge: function ()
    {
        return this.age
    }
};

// instantiate person object with person prototype parameter. Body implements object


var wendy = Object.create (person, {
    "age": {
        "value":42,
    }, 
    "fullname": {
        "value": "Robert",
    }
});

var chris = Object.create (person, {
    "age": {
        "value":46,
    }, 
    "fullname": {
        "value": "Robert",
    }
});

wendy.getAge();
console.log("The person's age is: " + wendy.age)

// end program
