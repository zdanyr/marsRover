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

//consider extremes of the grid
describe("given user gives instructions to move the rover", () => {
  test.each`
    direction | instruction | initialX | initialY | expectedX | expectedY
    ${"S"}    | ${"f"}      | ${0}     | ${0}     | ${0}      | ${1}
    ${"S"}    | ${"f"}      | ${1}     | ${1}     | ${1}      | ${2}
    ${"N"}    | ${"f"}      | ${1}     | ${1}     | ${1}      | ${0}
    ${"E"}    | ${"f"}      | ${1}     | ${1}     | ${2}      | ${1}
    ${"W"}    | ${"f"}      | ${1}     | ${1}     | ${0}      | ${1}
    ${"S"}    | ${"b"}      | ${1}     | ${1}     | ${1}      | ${0}
    ${"N"}    | ${"b"}      | ${1}     | ${1}     | ${1}      | ${2}
    ${"E"}    | ${"b"}      | ${1}     | ${1}     | ${0}      | ${1}
    ${"W"}    | ${"b"}      | ${1}     | ${1}     | ${2}      | ${1}
  `(
    "new position should be ($expectedX, $expectedY) when initial position is ($initialX, $initialY) and instructions contains $instruction and current direction is $direction",
    ({ direction, instruction, initialX, initialY, expectedX, expectedY }) => {
      const rover = new Rover({ x: initialX, y: initialY }, direction);
      rover.move(instruction);
      expect(rover.position.x).toEqual(expectedX);
      expect(rover.position.y).toEqual(expectedY);
    }
  );
  test.each`
    direction | instruction | initialX | initialY | expectedX | expectedY | expectedDirection
    ${"S"}    | ${"r"}      | ${0}     | ${0}     | ${0}      | ${0}      | ${"W"}
    ${"N"}    | ${"r"}      | ${0}     | ${0}     | ${0}      | ${0}      | ${"E"}
    ${"E"}    | ${"r"}      | ${0}     | ${0}     | ${0}      | ${0}      | ${"S"}
    ${"W"}    | ${"r"}      | ${0}     | ${0}     | ${0}      | ${0}      | ${"N"}
    ${"W"}    | ${"l"}      | ${0}     | ${0}     | ${0}      | ${0}      | ${"S"}
  `(
    "new direction should be $expectedDirection and position should remain as ($expectedX, $expectedY) when initial position is ($initialX, $initialY) and instructions contains $instruction and current direction is $direction",
    ({
      direction,
      instruction,
      initialX,
      initialY,
      expectedX,
      expectedY,
      expectedDirection
    }) => {
      const rover = new Rover({ x: initialX, y: initialY }, direction);
      rover.move(instruction);
      expect(rover.position.x).toEqual(expectedX);
      expect(rover.position.y).toEqual(expectedY);
      expect(rover.direction).toEqual(expectedDirection);
    }
  );
});

/*
 
 */
