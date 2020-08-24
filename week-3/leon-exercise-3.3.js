/* ============================================
; Title: Assignment 3.3 - Singleton Pattern
; Author: Professor Krasso
; Date: 22 August 2020
; Modified By: Wendy Leon
; Description: 3.3 - Singleton Pattern
;=========================================== */

var header = require('../header.js');

var header = require('../header.js');
console.log(header.display("Wendy", "Leon", "Exercise 3.3 - Singleton Pattern"));
console.log('\n');

/*

 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

 Create a new function and name it databaseSingletonTest()

databaseSingleTest() function
    Create two new database instances
    Call the console.log() function and output whether the two instances match
Call the databaseSingletonTest() function
 
*/

// start program


var DatabaseSingleton = (function() {
    var instance;
    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

function databaseInit() {
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();
    console.log("One database instance? %s ", (oracle === postgres));
}

databaseInit();







// end program
