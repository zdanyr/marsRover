const { initializePosition } = require("./position");

const createGrid = dimension => {
  let array = new Array(dimension);
  for (let i = 0; i < dimension; i++) {
    array[i] = new Array(dimension);
  }
  array = initializeGrid(array);
  array = initializePosition(array);
  return array;
};

const initializeGrid = array => {
  for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < array.length; y++) {
      array[x][y] = 0;
    }
  }
  return array;
};

module.exports = { createGrid, initializeGrid };
