const { createGrid } = require("./grid");

describe("grid", () => {
  test("should be 3x3 in dimension", () => {
    const result = createGrid(3);
    expect(result[0].length).toBe(3);
    expect(result[1].length).toBe(3);
    expect(result[2].length).toBe(3);
  });
});
