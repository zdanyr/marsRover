const createWorld = dimension => {
  let world = new Array(dimension);

  for (let i = 0; i < dimension; i++) {
    world[i] = new Array(dimension);
  }
  return getWorldWithObstacles(world);
};

getWorldWithObstacles = world => {
  let newWorld = world.map(row => [...row]);
  newWorld[1][1] = true;
  return newWorld;
};

module.exports = { createWorld };
