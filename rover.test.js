const { Rover } = require("./rover");

describe("given a rover", () => {
  test("it should set initial location to (0,0)", () => {
    const rover = new Rover();
    expect(rover.position.x).toEqual(0);
    expect(rover.position.y).toEqual(0);
  });

  test("should set initial facing direction to S", () => {
    const rover = new Rover();
    expect(rover.direction).toEqual("S");
  });
});

describe("given a rover with an initial position and a direction", () => {
  test("it should set location to (1,1)", () => {
    const rover = new Rover({ x: 1, y: 1 });
    expect(rover.position.x).toEqual(1);
    expect(rover.position.y).toEqual(1);
  });

  test("should set facing direction to N", () => {
    const rover = new Rover({ x: 1, y: 1 }, "N");
    expect(rover.direction).toEqual("N");
  });
});

describe("given user gives instructions to move the rover", () => {
  test.each`
    direction | instruction | expectedX | expectedY
    ${"S"}    | ${"f"}      | ${0}      | ${1}
  `(
    "position should be ($expectedX, $expectedY) when instructions contains $instruction and current direction is $direction",
    ({ direction, instruction, expectedX, expectedY }) => {
      const rover = new Rover({ x: 0, y: 0 }, direction);
      rover.move(instruction);
      expect(rover.position.x).toEqual(expectedX);
      expect(rover.position.y).toEqual(expectedY);
    }
  );
});
