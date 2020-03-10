/*
var prompt = require("prompt");
//
// Start the prompt
//
prompt.start();
//
// Get two properties from the user: username and email
//
prompt.get(["username", "email"], function(err, result) {
  //
  // Log the results.
  //
  console.log("Command-line input received:");
  console.log("  username: " + result.username);
  console.log("  email: " + result.email);
});
*/
const initializePosition = array => {
  array[0][0] = 1;
  return array;
};

const manageUserInput = userInput => {
  const userInputAsArray = Array.from(userInput);
  switch (userInputAsArray) {
    case "l":
    case "r":
      break;
    case "f":
    case "b":
      break;
  }
};

const turnRover = letter => {};

const moveRover = letter => {};

module.exports = { initializePosition };
