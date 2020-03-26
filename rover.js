class Rover {
  constructor(initialPosition, direction, world) {
    this.obstacleDetected = [];

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

    //this.obstacleDetection(instruction);
  }

  obstacleDetection(instruction) {
    if (this.isThereAnObstacleOld()) {
      this.reportObstaclePosition();
      this.move(this.oppositeMovements(instruction));
    }
  }
  oppositeMovements(instruction) {
    switch (instruction) {
      case "f":
        return "b";
      case "b":
        return "f";
    }
  }
  isThereAnObstacleOld() {
    return this.world[this.position.x][this.position.y];
  }

  isThereAnObstacle(x, y) {
    if (this.world[x][y]) throw Error("Obstacle found");
  }

  reportObstaclePosition() {
    this.obstacleDetected.push({ x: this.position.x, y: this.position.y });
  }

  moveForward() {
    if (this.direction === "S") {
      this.isThereAnObstacle(this.position.x, this.position.y + 1);
      this.moveY(1);
      return;
    }
    if (this.direction === "N") {
      this.isThereAnObstacle(this.position.x, this.position.y - 1);
      this.moveY(-1);
      return;
    }
    if (this.direction === "E") {
      this.isThereAnObstacle(this.position.x + 1, this.position.y);
      this.moveX(1);
      return;
    }
    if (this.direction === "W") {
      this.isThereAnObstacle(this.position.x - 1, this.position.y);
      this.moveX(-1);
      return;
    }
  }
  moveBackward() {
    if (this.direction === "S") {
      this.isThereAnObstacle(this.position.x, this.position.y - 1);
      this.moveY(-1);
      return;
    }
    if (this.direction === "N") {
      this.isThereAnObstacle(this.position.x, this.position.y + 1);
      this.moveY(1);
      return;
    }
    if (this.direction === "E") {
      this.isThereAnObstacle(this.position.x - 1, this.position.y);
      this.moveX(-1);
      return;
    }
    if (this.direction === "W") {
      this.isThereAnObstacle(this.position.x + 1, this.position.y1);
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
