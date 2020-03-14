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
    switch (instruction) {
      case "f":
        if (this.direction === "S") {
          this.position.y = this.position.y + 1;
        }
        break;

      default:
        break;
    }
  }
}

module.exports = { Rover };
