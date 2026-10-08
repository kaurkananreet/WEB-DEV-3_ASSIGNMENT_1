const crypto = require("crypto");

function rollDice() {
    const randomNumber = crypto.randomInt(1, 7);
    return randomNumber;
}

const result = rollDice();

console.log(`You rolled: ${result}`);