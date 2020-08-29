buttonArray = ["C", "=", "*", "/", "+", "-", 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
numberToOperate = [];
previousBtnClick = [];


// function to intiate the panel of calculator
function intiateButtonPanel() {
    var panel = document.querySelector(".btn-panel");
    for (var i = 0; i <= buttonArray.length - 1; i++) {
        var button = document.createElement("span");
        button.className = "btn";
        button.innerHTML = "<i>" + buttonArray[i] + "</i>";
        button.setAttribute("id", buttonArray[i]);
        button.addEventListener("click", function () {
            btnClick(this);
        });
        panel.append(button);
    }
}

// function to perform relevant operation on button press
function btnClick(btn) {
    if (btn) {
        if (isNumber(btn.innerText)) {
            document.querySelector("#output").value += btn.innerText;
        }
        if (!isNumber(btn.innerText) && !isClearBtnClick(btn.innerText)) {
            // if operator buttons are pressed

            var number = document.querySelector("#output").value;
            numberToOperate.push(parseInt(number));

            if (previousBtnClick.length == 0 && btn.innerText != '=') {
                previousBtnClick.push(btn.innerText);
            } else if (previousBtnClick[0] != btn.innerText && btn.innerText != '=') {
                operation = previousBtnClick.pop();
                previousBtnClick.push(btn.innerText);
                if (operation == '+') {
                    result = doSum(numberToOperate);
                    numberToOperate = [];
                    numberToOperate.push(result);
                } else if (operation == '-') {
                    result = doSub(numberToOperate);
                    numberToOperate = [];
                    numberToOperate.push(result);
                } else if (operation == '*') {
                    result = doMul(numberToOperate);
                    numberToOperate = [];
                    numberToOperate.push(result);
                } else if (operation == '/') {
                    result = doDiv(numberToOperate);
                    numberToOperate = [];
                    numberToOperate.push(result);
                }
            } else if (btn.innerText == '=') {
                // put final results on the screen
                operation = previousBtnClick.pop();
                if (operation == '+') {
                    result = doSum(numberToOperate);
                    numberToOperate = [];
                } else if (operation == '-') {
                    result = doSub(numberToOperate);
                    numberToOperate = [];
                } else if (operation == '*') {
                    result = doMul(numberToOperate);
                    numberToOperate = [];
                } else if (operation == '/') {
                    result = doDiv(numberToOperate);
                    numberToOperate = [];
                }
                document.querySelector("#output").value = result;
                return;
            }
            document.querySelector("#output").value = ""
        }
        if (isClearBtnClick(btn.innerText)) {
            document.querySelector("#output").value = "";
            numberToOperate = [];
        }

    }
}

// function to perform if character on the screen is a number or not
function isNumber(x) {
    if (!isNaN(x)) {
        return true;
    }
    return false;
}

// function to check if 'C' button of calculator is pressed
function isClearBtnClick(x) {
    if (x === 'C' || x === 'c') {
        return true;
    }
    return false;
}

// function to check if '=' button of calculator is pressed
function isEqualsBtnClick(x) {
    if (x === '=') {
        return true;
    }
    return false;
}

// function to do substraction operation on all elements of array
function doSub(elements) {
    var sub = 0;
    for (var i = 0; i < elements.length; i++) {
        if (sub == 0) {
            sub = elements[i];
        } else {
            sub -= elements[i];
        }
    }
    return sub;
}

// function to do addition operation on all elements of array
function doSum(elements) {
    var sum = 0;
    for (var i = 0; i < elements.length; i++) {
        sum += elements[i];
    }
    return sum;
}

// function to do multiplication operation on all elements of array
function doMul(elements) {
    var mul = 1;
    for (var i = 0; i < elements.length; i++) {
        mul *= elements[i];
    }
    return mul;
}

//function to do division operation on all elements of array
function doDiv(elements) {
    var div = 0;
    for (var i = 0; i < elements.length; i++) {
        if (div == 0) {
            div = elements[i];
        } else {
            div /= elements[i];
        }
    }
    return div;
}