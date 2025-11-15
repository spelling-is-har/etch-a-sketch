const container = document.querySelector(".container");
const prompt = document.querySelector(".prompt");
const colourButtonContainer = document.querySelector(".colourButtonContainer");
const rowOne = document.querySelector(".rowOne");
const rowTwo = document.querySelector(".rowTwo");
const colours = [
  "black",
  "white",
  "blue",
  "red",
  "yellow",
  "pink",
  "green",
  "orange",
];

let paintColour = "black";

prompt.addEventListener("click", (event) => {
  let size = window.prompt("Etch-a-Sketch size?");
  if (size > 100) {
    size = 16;
    alert("Max size 100");
  }

  //deletes grid
  deleteGrid();

  //creates new grid
  createGrid(size);
});

function deleteGrid() {
  //iterates over rows in grid and removes them, then does the same for row divs
  const removeBlock = document.querySelector(".row");
  while (removeBlock.firstChild) {
    removeBlock.removeChild(removeBlock.lastChild);
  }

  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

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
        col.style.background = paintColour;
      });
      row.appendChild(col);
    }

    container.appendChild(row);
  }
}

function createColourButtons() {
  for (colour of colours) {
    const colourButton = document.createElement("button");
    colourButton.style.backgroundColor = colour;
    colourButton.classList.add(colour);

    //add event listener to change colour accoding to buttons class
    colourButton.addEventListener("click", (event) => {
      console.log(colourButton.className);
      paintColour = colourButton.className;
    });

    //if condition to decide if colour buttons should go in the top row or
    //the bottom row depending on the amount of colour options
    if (colours.indexOf(colour) < colours.length / 2) {
      rowOne.appendChild(colourButton);
    } else {
      rowTwo.appendChild(colourButton);
    }
  }

  colourButtonContainer.appendChild(rowOne);
  colourButtonContainer.append(rowTwo);
}

createGrid(16);
createColourButtons();
