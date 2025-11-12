const container = document.querySelector(".container");
const prompt = document.querySelector(".prompt");

prompt.addEventListener("click", (event) => {
  let size = window.prompt("Etch-a-Sketch size?");
  if (size > 100) {
    size = 16;
    alert("Max size 100");
  }
  createGrid(size);
});

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    //Creates row divs to append the col divs that will create the blocks
    const row = document.createElement("div");
    row.classList.add("row");

    //creates blocks
    for (let j = 0; j < gridSize; j++) {
      const col = document.createElement("div");
      col.classList.add("block");

      col.addEventListener("mouseover", (event) => {
        col.style.background = "red";
      });
      row.appendChild(col);
    }

    container.appendChild(row);
  }
}

createGrid(16);
