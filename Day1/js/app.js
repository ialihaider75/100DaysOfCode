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
    if (addObjects[0] === addObjects[1]) {
        alert("You found a match");
        document.getElementById(selectedObjects[0]).setAttribute("src", "images/selected.png");
        document.getElementById(selectedObjects[1]).setAttribute("src", "images/selected.png");
    } else {
        alert("No match");
        document.getElementById(selectedObjects[0]).setAttribute("src", "images/blank.png");
        document.getElementById(selectedObjects[1]).setAttribute("src", "images/blank.png");
    }
    selectedObjects = [];
    addObjects = [];
}