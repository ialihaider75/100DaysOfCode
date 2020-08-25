objectsArray = [{
        name: 'burger',
        path: 'images/image1.png'
    },
    {
        name: 'donal',
        path: 'images/image2.png'
    },
    {
        name: 'pizza',
        path: 'images/image3.png'
    },
    {
        name: 'chips',
        path: 'images/image4.png'
    },
    {
        name: 'juice',
        path: 'images/image5.png'
    },
    {
        name: 'takeaway',
        path: 'images/image6.png'
    },
    {
        name: 'burger',
        path: 'images/image1.png'
    },
    {
        name: 'donal',
        path: 'images/image2.png'
    },
    {
        name: 'pizza',
        path: 'images/image3.png'
    },
    {
        name: 'chips',
        path: 'images/image4.png'
    },
    {
        name: 'juice',
        path: 'images/image5.png'
    },
    {
        name: 'takeaway',
        path: 'images/image6.png'
    }
]

addObjects = [];
selectedObjects = [];
wonObjects = [];
score = 0;

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function createBoard() {
    var board = document.querySelector(".board");
    shuffle(objectsArray);
    for (var i = 0; i < 12; i++) {
        var piece = document.createElement("img");
        piece.setAttribute("src", "images/blank.png");
        piece.className = "piece";
        piece.setAttribute("id", i);
        piece.addEventListener("click", flipPiece);
        board.append(piece);
    }
}

function flipPiece() {
    var id = this.getAttribute("id");
    var image = objectsArray[id];
    addObjects.push(image);
    selectedObjects.push(id);
    this.setAttribute("src", image["path"]);
    this.style.transform = "rotatey(" + 180 + "deg)";
    this.style.transitionDuration = "0.5s";
    if (addObjects.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    console.log(addObjects[0]);
    console.log(addObjects[1]);
    if (addObjects[0].name === addObjects[1].name) {
        alert("You found a match");
        runSuccessCase(selectedObjects[0], selectedObjects[1]);
    } else {
        alert("No match");
        document.getElementById(selectedObjects[0]).setAttribute("src", "images/blank.png");
        document.getElementById(selectedObjects[1]).setAttribute("src", "images/blank.png");
    }
    selectedObjects = [];
    addObjects = [];
    document.querySelector(".score").innerHTML = score;
    if (wonObjects.length === objectsArray.length / 2) {
        document.querySelector(".winFlag").innerHTML = "Congratulation! You have won the game";
    }
}

function runSuccessCase(object1, object2) {
    wonObjects.push(object1);
    score += 5;
    document.getElementById(object1).style.transform = "rotatey(" + 0 + "deg)";
    document.getElementById(object2).style.transform = "rotatey(" + 0 + "deg)";
    document.getElementById(object1).setAttribute("src", "images/selected.png");
    document.getElementById(object2).setAttribute("src", "images/selected.png");
    document.getElementById(object1).removeEventListener("click", flipPiece);
    document.getElementById(object2).removeEventListener("click", flipPiece);
}