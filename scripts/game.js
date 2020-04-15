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
   var grid = document.createElement("grid");

   for (var i = 0; i < rows; i++) {
       var gridRow = document.createElement("gridRow");
       for (var j = 0; j < cols; j++) {//
           var cell = document.createElement("gridCell");
           cell.setAttribute("id", i + "_" + j);
           cell.setAttribute("class", "off");
           cell.onclick = clickHandler;
           tr.appendChild(cell);
       }
       table.appendChild(gridRow);
   }
   gridContainer.appendChild(grid);
   }


   function clickHandler() {
    var rowcol = this.id.split("_");
    var row = rowcol[0];
    var col = rowcol[1];
    var classes = this.getAttribute("class");
        if(classes.indexOf("live") > -1) {
            this.setAttribute("class", "off");
            grid[row][col] = 0;
        } else {
            this.setAttribute("class", "on");
            grid[row][col] = 1;
        }

    }