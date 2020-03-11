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
}

module.exports = { Rover };
