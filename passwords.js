const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Welcome to the Validator tool!");

reader.question("Please enter a password.", function (input) {
  userInput = input.split("");

  if (userInput.length >= 10) {
    console.log("Success! You have created a password:");
  } else {
    console.log(
      "Error, your password must be at least 10 characters long, please try again."
    );
  }

  reader.close();
});
