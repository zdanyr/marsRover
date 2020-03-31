const createWorld = dimension => {
  let world = new Array(dimension).fill(new Array(dimension));

  return getWorldWithObstacles(world);
};

getWorldWithObstacles = world => {
  let newWorld = world.map(row => [...row]);
  newWorld[1][1] = true;
  newWorld[0][2] = true;
  return newWorld;
};

module.exports = { createWorld };
