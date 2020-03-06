const { createGrid } = require("./grid");

describe("grid", () => {
  test("Given a dimension when creating a grid then create a grid of the given dimension", () => {
    const result = createGrid(3);

    console.log(`result cero dos ${result[(0, 2)]}`);
    expect(result[(0, 2)]).toBeDefined();
    expect(result[(0, 3)]).toBeUndefined();
    expect(result[1].length).toBe(3);
    expect(result[2].length).toBe(3);
  });

  test("rover should initialize on point 0,0", () => {
    const result = createGrid(3);
    expect(result[(0, 0)]).toBe(1);
  });
});

/*
put rover on point 0,0
move rover to 0,1
put rover 0,2 then move rover to 0,0
turn rover left right


*/
