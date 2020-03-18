const createWorld = dimension => {
  let array = new Array(dimension);

  for (let i = 0; i < dimension; i++) {
    array[i] = new Array(dimension);
  }
  return array;
};

module.exports = { createWorld };
