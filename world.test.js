const { createWorld } = require("./world");

describe("world", () => {
  test("Given a dimension when creating a world then create a world of the given dimension", () => {
    const result = createWorld(3);
    expect(result[0].length).toEqual(3);
    expect(result[1].length).toEqual(3);
    expect(result[2].length).toEqual(3);
  });
});
