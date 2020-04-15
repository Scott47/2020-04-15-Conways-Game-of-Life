var rows = 38;
var cols = 100;

var playing = false;

var grid = new Array(rows);
var nextGrid = new Array(rows);

var timer;
var reproductionTime = 100;

function initializeGrids() {
    for (var i = 0; i < rows; i++) {
        grid[i] = new Array(cols);
        nextGrid[i] = new Array(cols);
    }
}

