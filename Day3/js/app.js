// getting length of the characters in a string
var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;

console.log("The length of the " + lastName + " is: " + lastNameLength);


//using bracket notation to get the first character of the string
var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0]; // Change this line

console.log("The first character of the " + lastName + " is: " + firstLetterOfLastName);

//using bracket notation to get the nth character of a string
var lastName = "Lovelace";

var thirdLetterOfLastName = lastName[2]; // Change this line

console.log("The Third character of the " + lastName + " is: " + thirdLetterOfLastName);


//getting last character of the string
var lastName = "Lovelace";

var lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

console.log("The last character of the " + lastName + " is: " + lastLetterOfLastName);

//getting any nth character of the string
var lastName = "Lovelace";

var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

console.log("The second last character of the " + lastName + "is: " + secondToLastLetterOfLastName);


//using prior knowledge to build a string with given words
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = myNoun + " is " + myAdjective + " who " + myVerb + " " + myAdverb;

console.log(wordBlanks);

// decalaring simple Array containing a number and a string
var myArray = ["Ali Haider", 22];
console.log("Our array elements are: " + myArray);

//decalring multi-dimensional array
// Only change code below this line
var myArray = [
    ["Ali Haider", 22],
    ["Ali Hussnain", 18]
];
console.log("Our multi-dimensional array elements are: " + myArray);

// accessing the array elements using index
// Setup
var myArray = [50, 60, 70];

var temp = myArray[0];
var myData = temp;

console.log("The first value of the [" + myArray + "] is: ", myData);

// modifying array data
var myArray = [18, 64, 99];

console.log("The array befor the modification of its data is: [" + myArray + "]");

myArray[0] = 45;

console.log("The array after the modification of its data is: [" + myArray + "]");

// accessing data from a multi-dimensional array
var myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [10, 11, 12], 13, 14
    ]
];

var myData = myArray[2][1];

console.log("The second element of the 3rd array inside main array is: " + myData);

// appending data to the end of the array
var myArray = [
    ["John", 23],
    ["cat", 2]
];

console.log("The array before appending the data: [[" + myArray[0] + "],[" + myArray[1] + "]]");

myArray.push(["dog", 3]);

console.log("The array after appending the data: [[" + myArray[0] + "],[" + myArray[1] + "],[" + myArray[2] + "]]");

//removing last value from an array
var myArray = [
    ["John", 23],
    ["cat", 2]
];

console.log("The array before the removal of the last value is : [[" + myArray[0] + "],[" + myArray[1] + "]]");

var removedFromMyArray = myArray.pop();

console.log("The array after the removal of the last value is: [[" + myArray[0] + "]]");
console.log("The removed value is: [" + removedFromMyArray + "]");