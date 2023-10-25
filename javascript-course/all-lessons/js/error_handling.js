// Javascript Errors and Error handling
console.clear();

"use strict";

// variable = "dave"; // ReferenceError

const variable = "Dave";
// variable = "Steve"; // TypeError

console.log(variable)

/*-----------------------------------------------------------------------------------*/
// Throwing built-in errors 
const makeError = () => {
    try { // will only exectue if no errors
        const name = "Dave";
        name = "Steve";
    } catch (err) { // will only execute if there is an error
        // console.log(err);
        console.warn(err); 
        console.error(err); 
        console.table(err); 
        // logTheError(err.stack); // example of logging error info somewhere
    } finally { // will execute no matter what 
        console.log("...finally");
    }
};

makeError();

/*-----------------------------------------------------------------------------------*/
// using new Error to write custom error message

const makeNewError = () => {
    try {
        throw new Error("This is a new error!");
    } catch (err) {
        // console.log(err);
        //console.warn(err); 
        console.error(err); 
        //console.table(err); 
        // logTheError(err.stack); // example of logging error info somewhere
    }
};

makeNewError();

/*-----------------------------------------------------------------------------------*/
// Creating a custom error 

function customError(message){
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`;
};

const makeCustomError = () => {
    try {
        throw new customError("This is a custom error!");
    } catch (err) {
        // console.log(err);
        //console.warn(err); 
        console.error(err); 
        //console.table(err); 
        // logTheError(err.stack); // example of logging error info somewhere
    }
};

makeCustomError();
