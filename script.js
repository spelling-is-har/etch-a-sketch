console.log("hello world");
const container = document.querySelector(".container");

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    //Creates row divs to append the col divs that will create the blocks
    const row = document.createElement("div");
    row.classList.add("row");

    //creates blocks
    for (let j = 0; j < gridSize; j++) {
      const col = document.createElement("div");
      col.classList.add("block");
      col.innerText = "c" + j;

      col.addEventListener("mouseover", (event) => {
        col.style.background = "red";
      });
      row.appendChild(col);
    }

    container.appendChild(row);
  }
}

createGrid(16);

//for size
//create row block
// for size
//  create col blocks
//  append in loop
