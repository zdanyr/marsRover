const { Rover } = require("./rover");
const { createWorld } = require("./world");

describe("given a rover", () => {
  test("it should set initial location to (0,0)", () => {
    const world = createWorld(3);
    const rover = new Rover("", "", world);
    expect(rover.position.x).toEqual(0);
    expect(rover.position.y).toEqual(0);
  });

  test("should set initial facing direction to S", () => {
    const world = createWorld(3);
    const rover = new Rover("", "", world);
    expect(rover.direction).toEqual("S");
  });
});

const createRover = () => {
  const initialPosition = { x: 1, y: 1 };
  const initialDirection = "N";
  const world = createWorld(3);
  return new Rover(initialPosition, initialDirection, world);
};

describe("given a rover with an initial position and a direction", () => {
  let rover;

  beforeEach(() => {
    rover = createRover();
  });

  test("it should set location to (1,1)", () => {
    expect(rover.position.x).toEqual(1);
    expect(rover.position.y).toEqual(1);
  });

  test("should set facing direction to N", () => {
    expect(rover.direction).toEqual("N");
  });
});

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
    ${"S"}    | ${"f"}      | ${0}     | ${0}     | ${0}      | ${1}
  `(
    "new position should be ($expectedX, $expectedY) when initial position is ($initialX, $initialY) and instructions contains $instruction and current direction is $direction",
    ({ direction, instruction, initialX, initialY, expectedX, expectedY }) => {
      let world = createWorld(3);
      let rover = new Rover({ x: initialX, y: initialY }, direction, world);
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
      let world = createWorld(3);
      let rover = new Rover({ x: initialX, y: initialY }, direction, world);
      rover.move(instruction);
      expect(rover.position.x).toEqual(expectedX);
      expect(rover.position.y).toEqual(expectedY);
      expect(rover.direction).toEqual(expectedDirection);
    }
  );
});

describe("the rover should wrap from one edge of the grid to another", () => {
  test.each`
    direction | instruction | initialX | initialY | expectedX | expectedY
    ${"W"}    | ${"f"}      | ${0}     | ${0}     | ${2}      | ${0}
    ${"W"}    | ${"b"}      | ${2}     | ${0}     | ${0}      | ${0}
    ${"E"}    | ${"b"}      | ${0}     | ${0}     | ${2}      | ${0}
    ${"E"}    | ${"f"}      | ${2}     | ${0}     | ${0}      | ${0}
    ${"N"}    | ${"f"}      | ${0}     | ${0}     | ${0}      | ${2}
    ${"N"}    | ${"b"}      | ${0}     | ${2}     | ${0}      | ${0}
    ${"S"}    | ${"f"}      | ${0}     | ${2}     | ${0}      | ${0}
    ${"S"}    | ${"b"}      | ${0}     | ${0}     | ${0}      | ${2}
  `(
    "given the rover is at the edge of the grid, when moving forward it should wrap to the start of the grid",
    ({ direction, instruction, initialX, initialY, expectedX, expectedY }) => {
      const world = createWorld(3);
      const rover = new Rover({ x: initialX, y: initialY }, direction, world);
      rover.move(instruction);
      expect(rover.position.x).toEqual(expectedX);
      expect(rover.position.y).toEqual(expectedY);
    }
  );
});

describe("given the rover moves", () => {
  test("when there is an obstacle in the next potential location, the rover should detect it", () => {
    const world = createWorld(3);
    const rover = new Rover({ x: 1, y: 0 }, "S", world);
    rover.move("f");
    rover.isThereAnObstacle();
    expect(rover.isThereAnObstacle()).toBe(true);
  });
  test("when there is not an obstacle in the next potential location, the rover should know there is not an obstacle", () => {
    const world = createWorld(3);
    const rover = new Rover({ x: 1, y: 1 }, "S", world);
    rover.move("f");
    rover.isThereAnObstacle();
    expect(rover.isThereAnObstacle()).toBe(undefined);
  });
  test("when it detects an obstacle it should report its location", () => {
    const world = createWorld(3);
    const rover = new Rover({ x: 1, y: 0 }, "S", world);
    rover.move("f");
    expect(rover.obstaclePosition()).toEqual({ x: 1, y: 1 });
  });
});

//add test cases for combination of commands
