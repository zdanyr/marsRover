class Rover {
  constructor(initialPosition, direction) {
    if (!initialPosition) {
      this.position = {
        x: 0,
        y: 0
      };
    } else {
      this.position = initialPosition;
    }
    direction ? (this.direction = direction) : (this.direction = "S");
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
  }

  moveForward() {
    if (this.direction === "S") {
      this.position.y = this.position.y + 1;
      return;
    }
    if (this.direction === "N") {
      this.position.y = this.position.y - 1;
      return;
    }
    if (this.direction === "E") {
      this.position.x = this.position.x + 1;
      return;
    }
    if (this.direction === "W") {
      this.position.x = this.position.x - 1;
      return;
    }
  }
  moveBackward() {
    if (this.direction === "S") {
      this.position.y = this.position.y - 1;
      return;
    }
    if (this.direction === "N") {
      this.position.y = this.position.y + 1;
      return;
    }
    if (this.direction === "E") {
      this.position.x = this.position.x - 1;
      return;
    }
    if (this.direction === "W") {
      this.position.x = this.position.x + 1;
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
}

module.exports = { Rover };
