var rows = 50;
var cols = 100;

var playing = false;

// define grid using 'new' operator to create an instance of the grid object
var grid = new Array(rows);
var nextGrid = new Array(rows);

var timer;
var reproductionTime = 100;

// load initial game board grid
function loadGrid() {
    buildGrid();
}

function buildGrid() {
  for (var i = 0; i < rows; i++) {
    grid[i] = new Array(cols);
    nextGrid[i] = new Array(cols);
  }
}

// click handler for when user clicks cell on grid and turns cell "on" or "off"
function clickHandler() {

    // loop through array with class of "on" and set to "off" when clicked and vice versa


// Create game board grid
function createGrid() {
  var gridBoard = document.getElementById("grid-container");
  console.log("grid maybe?", gridBoard);
  var grid = document.createElement("grid");

//   loops through
  for (var i = 0; i < rows; i++) {
    var gridRow = document.createElement("gridRow");
    for (var j = 0; j < cols; j++) {
      //
      var cell = document.createElement("gridCell");
      cell.setAttribute("id", i + "_" + j);
      cell.setAttribute("class", "off");
      cell.onclick = clickHandler;
      gridRow.appendChild(cell);
    }
    grid.appendChild(gridRow);
  }
  gridBoard.appendChild(grid);
}




// RULES
// Any live cell with fewer than two live neighbours dies, as if caused by under-population.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overcrowding.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

// fires grid as soon as object loads
window.onload = loadGrid