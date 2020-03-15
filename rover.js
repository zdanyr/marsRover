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
    if (instruction === "b") {
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
  }
}

module.exports = { Rover };
