const createGrid = dimension => {
  const array = new Array(dimension);
  for (let i = 0; i < dimension; i++) {
    array[i] = new Array(dimension);
  }
  initializePositionRover(array);
  return array;
};

const initializePositionRover = array => {
  array[(0, 0)] = 1;
};

module.exports = { createGrid };
