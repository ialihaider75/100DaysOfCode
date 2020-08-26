// learned about the variable and assignments
var myVar = 5;
var a = "My String";
var myName = "Ali Haider";
var myDecimalVar = 4.5;
console.log("The value of variables =", myVar, a, myName, myDecimalVar);

// learned about the arithmetic operations

// addition
var xVar = 4;
var yVar = 5;
var resultVar = xVar + yVar;
console.log("The addition of", xVar, "and", yVar, "=", resultVar);

var xDecimal = 2.2;
var yDecimal = 2.3;
var resultDecimal = xDecimal + yDecimal;
console.log("The addition of", xDecimal, "and", yDecimal, "=", resultDecimal);

// substraction
var resultSub = 4 - 5;
console.log("Substraction of 4 and 5 =", resultSub);

var decimalSubstraction = 2.5 - 0.5;
console.log("Decimal Substraction of 2.5 and 0.5 =", decimalSubstraction)

// multiplication
var mulResult = 5 * 7;
console.log("The multiplication of 5 and 7 =", mulResult);

var mulDecimal = 3.4 * 4.5;
console.log("The multiplication of 3.4 and 4.5 =", mulDecimal);

//division
var divisionResult = 5 / 2;
console.log("The division of 5 and 2 =", divisionResult);

var decimalDivision = 2.5 / 2;
console.log("The division of 2.5 and 2 =", decimalDivision);

//increment
var myIncrementVariable = 45;
myIncrementVariable++;
console.log("The increment of the 45 =", myIncrementVariable);

//decrement
var myDecrementVariable = 46;
myDecrementVariable--;
console.log("The decrement of the 46 =", myDecrementVariable);

// addition with += operator
var anyVar = 3;
console.log("The addition of 3 and 4 with += equals", anyVar += 4);

//substraction with -= operator
var subVar = 6;
console.log("The substraction of 6 and 4 with -= equals", subVar += 4);

//multiplication with *= operator
var mulVar = 7;
console.log("The substraction of 7 and 4 with *= equals", mulVar *= 4);

//division with /= operator
var divVar = 5;
console.log("The division of 5 and 2 with /= equals", divVar /= 2);

//remainder operator
var var1 = 45;
var var2 = 2;
var remainder = var1 % var2;
console.log("The remainder of 45 and 2 =", remainder);

//escape character
var doubleQuoted = "The String \"double quotes\".";
var singleQuoted = 'The String\'s single quoted part';
var tabQuoted = "1\t2 seprated by tab";
var stringOnNewLines = "First Line\nSecond Line\nThird Line";
console.log(doubleQuoted);
console.log(singleQuoted);
console.log(tabQuoted);
console.log(stringOnNewLines);

//Concatnating string 
var string1 = "The first sentence. ";
var string2 = "The second sentence.";
var compoundString = "We are concatenated strings ";
var combinedString = string1 + string2;
var x = compoundString += combinedString;
console.log(x);