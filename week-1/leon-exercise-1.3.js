/* ============================================
; Title: Assignment 1.3 Classes and Interfaces
; Author: Professor Krasso
; Date: 7 August 2020
; Modified By: Wendy Leon
; Description: Classes and Interfaces
;=========================================== */

var header = require('../header.js');

var header = require('../header.js');
console.log(header.display("Wendy", "Leon", "Exercise 1.3 Classes and Interfaces"));
console.log('\n');

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>
*/
// start program
function cellPhone(model){
    this.manufacturer = "Apple";
    this.model = model;
    this.color = "Red";
    this.price = 999.99;

    this.getPrice = function ()
    {
            return this.price;
    }
    this.getModel = function ()
    {
            return this.model;
    }
    this.getDetails = function ()
    {
        return "\nManufacturer: " + this.manufacturer + "\nModel: " + this.model + "\nColor: " + this.color + "\nPrice: " + 
                 this.price ;
    }
}

var cell = new cellPhone("Iphone 11");
console.log(" -- DISPLAYING CELL PHONE DETAILS --");
console.log(cell.getDetails());

// end program