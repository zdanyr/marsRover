class Rover {
  constructor(initialPosition, direction, world) {
    if (initialPosition) {
      this.position = initialPosition;
    } else {
      this.position = {
        x: 0,
        y: 0
      };
    }
    direction ? (this.direction = direction) : (this.direction = "S");
    this.world = world;
    this.initializeObstacles();
  }

  initializeObstacles() {
    this.world[1][1] = true;
    this.world[2][2] = true;
  }

  move(instruction) {
    if (instruction === "f") {
      this.moveForward();
    }
    if (instruction === "b") {
      this.moveBackward();
    }
    if (instruction === "r") {
      this.moveRight();
    }
    if (instruction === "l") {
      this.moveLeft();
    }
    if (this.isThereAnObstacle()) {
      return this.obstaclePosition();
    }
  }

  isThereAnObstacle() {
    let x = this.position.x;
    let y = this.position.y;
    return this.world[x][y];
  }
  obstaclePosition() {
    return { x: this.position.x, y: this.position.y };
  }

  moveForward() {
    if (this.direction === "S") {
      this.moveY(1);
      return;
    }
    if (this.direction === "N") {
      this.moveY(-1);
      return;
    }
    if (this.direction === "E") {
      this.moveX(1);
      return;
    }
    if (this.direction === "W") {
      this.moveX(-1);
      return;
    }
  }
  moveBackward() {
    if (this.direction === "S") {
      this.moveY(-1);
      return;
    }
    if (this.direction === "N") {
      this.moveY(1);
      return;
    }
    if (this.direction === "E") {
      this.moveX(-1);
      return;
    }
    if (this.direction === "W") {
      this.moveX(1);
      return;
    }
  }
  moveX(delta) {
    this.position.x += delta;

    if (this.position.x === this.world.length) {
      this.position.x = 0;
      return;
    }
    if (this.position.x === -1) {
      this.position.x = this.world.length - 1;
      return;
    }
  }
  moveY(delta) {
    this.position.y += delta;

    if (this.position.y === this.world.length) {
      this.position.y = 0;
      return;
    }
    if (this.position.y === -1) {
      this.position.y = this.world.length - 1;
      return;
    }
  }
  moveRight() {
    if (this.direction === "S") {
      this.direction = "W";
      return;
    }
    if (this.direction === "N") {
      this.direction = "E";
      return;
    }
    if (this.direction === "E") {
      this.direction = "S";
      return;
    }
    if (this.direction === "W") {
      this.direction = "N";
      return;
    }
  }
  moveLeft() {
    if (this.direction === "S") {
      this.direction = "E";
      return;
    }
    if (this.direction === "N") {
      this.direction = "W";
      return;
    }
    if (this.direction === "E") {
      this.direction = "N";
      return;
    }
    if (this.direction === "W") {
      this.direction = "S";
      return;
    }
  }
}

module.exports = { Rover };
