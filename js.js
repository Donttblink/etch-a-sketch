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
  
  const cell = e.target;

  let count = Number(cell.dataset.hovers) || 0;
  if (count >= 10) return;

  count++;
  cell.dataset.hovers = count;
  const opacity = count / 10;
  if (funky) {
  if (!cell.dataset.hue) {
    cell.dataset.hue = Math.floor(Math.random() * 360);
  }
  cell.style.backgroundColor = `hsla(${cell.dataset.hue}, 70%, 60%, ${opacity})`;  
  } else {
    cell.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
  }
});

const clearDrawing = document.querySelector("#clearGrid");

clearDrawing.addEventListener("click", () => {
  document.querySelectorAll(".gridSquare").forEach((cell) => {
    cell.style.backgroundColor = "";
    delete cell.dataset.hovers;
    delete cell.dataset.hue;
  });
});
