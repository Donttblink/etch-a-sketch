const container = document.querySelector("#boxContainer");

let gridSize = 16;

function gridDraw(gridSize) {
  for (let i = 0; i < gridSize ** 2; i++) {
    const square = document.createElement("div");
    square.classList.add("gridSquare");
    square.style.width = `calc(100% / ${gridSize})`;
    square.style.height = `calc(100% / ${gridSize})`;

    container.appendChild(square);
  }
}

gridDraw(gridSize);

const gridRedraw = document.querySelector("#newGrid");

gridRedraw.addEventListener("click", () => {
  let size;
  while (true) {
    const input = prompt("Enter grid size (1-100):");
    if (input === null) return;
    size = Number(input);
    if (size >= 1 && size <= 100) break;
    alert("Please enter a NUMBER between 1 and 100");
  }
  container.innerHTML = "";
  gridDraw(size);
});

container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("gridSquare")) {
    e.target.style.backgroundColor = "black";
  }
});