const { createGrid } = require("./grid");

describe("grid", () => {
  test("Given a dimension when creating a grid then create a grid of the given dimension", () => {
    const result = createGrid(3);
    expect(result[(0, 2)]).toBeDefined();
    expect(result[(0, 3)]).toBeUndefined();
    expect(result[(1, 2)]).toBeDefined();
    expect(result[(1, 3)]).toBeUndefined();
    expect(result[(2, 2)]).toBeDefined();
    expect(result[(3, 3)]).toBeUndefined();
  });
});

describe("position of rover", () => {
  test("it should initialize on point 0,0", () => {
    const result = createGrid(3);
    expect(result[0][0]).toBe(1);
  });
  test("when mars initialize, all positions in the grid, except 0,0 should not be 1", () => {
    const grid = createGrid(3);
    let result = false;
    for (let row = 0; row < grid.length; row++) {
      for (let column = 0; column < grid.length; column++) {
        if (grid[row][column] === 1 && row != 0 && column != 0) result = true;
      }
    }
    expect(result).toBe(false);
  });
});

/*
move rover to 0,1
put rover 0,2 then move rover to 0,0
turn rover left right


*/
