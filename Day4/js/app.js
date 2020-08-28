buttonArray = ["C", "=", "*", "/", "+", "-", 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

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
    }
}

function isNumber(x) {
    if (!isNaN(x)) {
        return true;
    }
    return false;
}