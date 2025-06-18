let userName = prompt("Enter your name to generate yor userid");

let userId = `@${userName.toLowerCase()}${userName.length}`;
console.log("Your user id is: " + userId);
