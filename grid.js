const createGrid = dimension => {
  let array = new Array(dimension);
  for (let i = 0; i < dimension; i++) {
    array[i] = new Array(dimension);
  }
  array = initializeGrid(array);
  array = initializePositionRover(array);
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

const initializePositionRover = array => {
  array[0][0] = 1;
  return array;
};

module.exports = { createGrid };
