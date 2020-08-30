// remove first element from array using shift() function

var myArray = [
    ["John", 23],
    ["dog", 3]
];
console.log("Before removing first element [[" + myArray[0] + "],[" + myArray[1] + "]]");

var removedFromMyArray = myArray.shift();
console.log("First element removed from myArray using shift() is: [" + removedFromMyArray + "]");

// add element at the start of array

var myArray = [
    ["John", 23],
    ["dog", 3]
];
myArray.shift();

console.log("Array before adding element to the start of it: [[" + myArray[0] + "]]");

myArray.unshift(["Paul", 35]);
console.log("After adding element at the start of array is: [[" + myArray[0] + "],[" + myArray[1] + "]]");

// javascript functions

// simple defining and calling js function
function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();

// function with parameters
function functionWithArgs(val1, val2) {
    console.log("The sum of " + val1 + " and " + val2 + " is: " + (val1 + val2));
}
functionWithArgs(23, 21);

// global scope variables
var myGlobal = 10;
var oopsGlobal;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

// local scope variables
function myLocalScope() {
    'use strict';
    var myVar = "My local variable";

    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
//console.log('outside myLocalScope', myVar);

// global and local scope variables
/* It is possible to have both local and global variables with the same name. When you do this,
 the local variable takes precedence over the global variable. */

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    var outerWear = "sweater";


    // Only change code above this line
    return outerWear;
}

console.log("The return value of myOutfit() is: " + myOutfit());

// return a value from a function
function timesFive(num) {
    return num * 5;
}
console.log("The return value of timesFive() for argument 5 is: " + timesFive(5));

// function with undefined return value
// Setup
var sum = 0;

function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum = sum + 5;
}

console.log("The return value of addThree() is: " + addThree());
console.log("The return value of addFive() is: " + addFive());

// assigning return value of a function to a variable
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);

console.log("The assigned value is: " + processed);

// Queue concept using basic array and array functions 
function nextInLine(arr, item) {
    arr.push(item); // add element to the end of array
    return item = arr.shift(); // removes element from top of array and return it.

}

var testArr = [1, 2, 3, 4, 5];


console.log("Before: " + JSON.stringify(testArr));
console.log("removed item from array " + nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// boolean values in javascript 
//true
//false

function myBooleanFunction() {
    return true;
}

console.log("my boolean value is: " + myBooleanFunction());