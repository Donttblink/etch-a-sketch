const container = document.querySelector("#boxContainer");

let gridSize = 16;

function gridDraw(gridSize) {
  for (let i = 0; i < gridSize ** 2; i++) {
    let square = document.createElement("div");
    square.classList.add("gridSquare");
    square.style.width = `calc(100% / ${gridSize}`;
    square.style.height = `calc(100% / ${gridSize}`;

    container.appendChild(square);
  }
}

gridDraw(gridSize);

const gridRedraw = document.querySelector("#newGrid");


gridRedraw.addEventListener("click", () => {
  const size = prompt("Enter grid size (1-100):");
});

