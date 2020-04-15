var rows = 50;
var cols = 100;

var playing = false;

// define grid using new operator to create an instance of the grid object
var grid = new Array(rows);
var nextGrid = new Array(rows);

var timer;
var reproductionTime = 100;

function buildGrid() {
    for (var i = 0; i < rows; i++) {
        grid[i] = new Array(cols);
        nextGrid[i] = new Array(cols);
    }
}


// Create game board
function createBoard() {
    var gridContainer = document.getElementById('grid-container');
   console.log("grid maybe?", gridContainer)
   var table = document.createElement("table");

   for (var i = 0; i < rows; i++) {
       var tableRow = document.createElement("tableRow");
       for (var j = 0; j < cols; j++) {//
           var cell = document.createElement("tableCell");
           cell.setAttribute("id", i + "_" + j);
           cell.setAttribute("class", "dead");
           cell.onclick = cellClickHandler;
           tr.appendChild(cell);
       }
       table.appendChild(tableRow);
   }
   gridContainer.appendChild(table);
   }
