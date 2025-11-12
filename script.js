console.log("hello world");
const container = document.querySelector(".container");

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < gridSize; j++) {
      const col = document.createElement("div");
      col.classList.add("block");
      col.innerText = "c" + j;
      row.appendChild(col);
    }

    container.appendChild(row);
  }
}

createGrid(3);

//for size
//create row block
// for size
//  create col blocks
//  append in loop
