const { createGrid } = require("./grid");

describe("grid", () => {
  test("should be 3x3 in dimension", () => {
    const result = createGrid(3);
    expect(result.length).toBe(3);
  });
});
