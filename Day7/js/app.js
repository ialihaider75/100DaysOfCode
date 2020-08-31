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