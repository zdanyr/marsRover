const createGrid = x => {
  const array = new Array(x);
  for (let i = 0; i < x; i++) {
    array[i] = new Array(x);
  }
  return array;
};

module.exports = { createGrid };
