const container = document.querySelector("#boxContainer");

let gridSize = 16;
let funky = false;
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

let funkyColor = document.querySelector("#randomColors");

funkyColor.addEventListener("click", () => {
  funky = !funky;
  funkyColor.textContent = funky ? "Funky ON" : "Funky OFF";
});

container.addEventListener("mouseover", (e) => {
  if (!e.target.classList.contains("gridSquare")) return;

  if (e.target.classList.contains("filled")) {
    for (let j = 0; j > 10; j++) {
      e.target.style.saturation += 2;
      e.target.style.lightness += 2;
    }
  } else if (funky) {
    e.target.style.backgroundColor = randomColor();
    e.target.classList.add("filled");
  } else {
    e.target.style.backgroundColor = "black";
    e.target.classList.add("filled");
  }
});

function randomColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 70;
  const lightness = 60;

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

const clearDrawing = document.querySelector("#clearGrid");

clearDrawing.addEventListener("click", () => {
  document.querySelectorAll(".gridSquare").forEach((cell) => {
    cell.style.backgroundColor = "";
    cell.classList.remove("filled");
  });
});
