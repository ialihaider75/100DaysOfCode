buttonArray = ["C", "=", "*", "/", "+", "-", 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
numberToOperate = [];
previousBtnClick = [];
currentOperation = '';

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

function btnClick(btn) {
    if (btn) {
        if (isNumber(btn.innerText)) {
            document.querySelector("#output").value += btn.innerText;
        }
        if (!isNumber(btn.innerText) && !isClearBtnClick(btn.innerText)) {
            // if operator buttons are pressed

            var number = document.querySelector("#output").value;
            numberToOperate.push(number);

            if (previousBtnClick.length == 0) {
                previousBtnClick.push(btn.innerText);
            } else if (previousBtnClick[0] != btn.innerText && btn.innerText != '=') {

            } else if (btn.innerText == '=') {
                // put final results on the screen
                document.querySelector("#output").value = numberToOperate;
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

function isNumber(x) {
    if (!isNaN(x)) {
        return true;
    }
    return false;
}

function isClearBtnClick(x) {
    if (x === 'C' || x === 'c') {
        return true;
    }
    return false;
}

function isEqualsBtnClick(x) {
    if (x === '=') {
        return true;
    }
    return false;
}

function isClearOrEqualsBtnClick(x) {
    if (isClearBtnClick(x) || isEqualsBtnClick(x)) {
        return true;
    }
    return false;
}

function doSub(elements) {
    var sub = 0;
    for (var i = 0; i < elements.length; i++) {
        sub -= elements[i];
    }
    return sub;
}

function doSum(elements) {
    var sum = 0;
    for (var i = 0; i < elements.length; i++) {
        sum += elements[i];
    }
    return sum;
}