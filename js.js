const container = document.querySelector("#container");
let gridSize = 16;


function gridDraw (gridSize) {
  for (let i = 0; i < gridSize; i++) { 
    let square = document.createElement("div");
    square.classList.add("gridSquare");
    container.appendChild(square);    

  }
};

gridDraw(gridSize);
