function createBoard() {
    var board = document.querySelector(".board");
    for (var i = 0; i < 12; i++) {
        var piece = document.createElement("span");
        piece.className = "piece";
        piece.setAttribute("id", "piece" + i);
        piece.addEventListener("click", flipPiece);
        board.append(piece);
    }
}

function flipPiece() {
    this.setAttribute("style", "background-color:white");
    var id = this.getAttribute("id");
}