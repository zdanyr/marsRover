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
    if (instruction === "l") {
      this.moveLeft();
    }
  }

  moveX(delta) {
    this.position.x += delta;
  }

  moveY(delta) {
    this.position.y += delta;
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
