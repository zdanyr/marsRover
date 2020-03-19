const createWorld = dimension => {
  let world = new Array(dimension);

  for (let i = 0; i < dimension; i++) {
    world[i] = new Array(dimension);
  }
  return world;
};

module.exports = { createWorld };
