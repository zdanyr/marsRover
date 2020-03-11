const { createGrid } = require("./grid");

describe("grid", () => {
  test("Given a dimension when creating a grid then create a grid of the given dimension", () => {
    const result = createGrid(3);
    expect(result[0].length).toEqual(3);
    expect(result[1].length).toEqual(3);
    expect(result[2].length).toEqual(3);
  });
});
