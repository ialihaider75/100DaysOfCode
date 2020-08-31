//comparison operator 
// equality operator  ==
// Setup
function testEqual(val) {
    if (val == 10) { // Change this line
        return "Equal";
    } // Note: equality operator attempts to convert type of operands to
    // to compare them
    return "Not Equal";
}

console.log("The return value is " + testEqual(10));

// strict equality operator       ===
/*
strict equality operator not convert type instead it will only returns true when both operands have same type
*/
// Setup
function testStrict(val) {
    if (val === 10) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

console.log("The return value is " + testStrict(10));
console.log("The return value is " + testStrict('10'));

//inequality operator !=
// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

console.log("The return value is " + testNotEqual(10));
// strictly not equal !==

// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

console.log("The return value id " + testStrictNotEqual(10));


// greater then operator >
function testGreaterThan(val) {
    if (val > 100) { // Change this line
        return "Over 100";
    }

    if (val > 10) { // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

console.log("The return value is " + testGreaterThan(10));

// greater then or equal to operator >=
function testGreaterOrEqual(val) {
    if (val >= 20) { // Change this line
        return "20 or Over";
    }

    if (val >= 10) { // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

console.log("The return value is " + testGreaterOrEqual(10));

// less then operator <
function testLessThan(val) {
    if (val < 25) { // Change this line
        return "Under 25";
    }

    if (val < 55) { // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

console.log("The return value is " + testLessThan(10));

//less then or equal to operator <=
function testLessOrEqual(val) {
    if (val <= 12) { // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) { // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

console.log("The return value is " + testLessOrEqual(10));

// the logical and operator &&
function testLogicalAnd(val) {
    // Only change code below this line

    if (val <= 50 && val >= 25) {

        return "Yes";

    }

    // Only change code above this line
    return "No";
}

console.log("The return value is " + testLogicalAnd(10));

// the logical or operator ||
function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        return "Outside";
    }

    // Only change code above this line
    return "Inside";
}

console.log("The return value of " + testLogicalOr(15));

// the else statement
function testElse(val) {
    var result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

console.log("The return value is " + testElse(4));

// else if statements
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }

}

console.log("The return value is " + testElseIf(7));

// managing logic with composite if else coditions
function orderMyLogic(val) {
    if (val >= 10) {
        return "Greater than or equal to 10";
    } else if (val < 10 && val >= 5) {
        return "Less than 10";
    } else if (val < 5) {
        return "Less than 5";
    }
}

console.log("The return value is " + orderMyLogic(7));

// chained if else statement
function testSize(num) {
    // Only change code below this line
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }

    // Only change code above this line
}

console.log("the return value is " + testSize(7));