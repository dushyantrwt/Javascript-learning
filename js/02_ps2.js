let gameNum = 25;
let userNum = prompt("Guess the game number between 1 and 50");

while (userNum != gameNum) {
    userNum = prompt("You guess the wrong no. Guess again between 1 and 50");
}

console.log("You guessed the right number: " + userNum);


