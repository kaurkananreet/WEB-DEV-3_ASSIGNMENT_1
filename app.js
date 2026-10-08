const isEven = require("./modules/isEven");
const log = require("./modules/logger");

const number = 10;

log(`Checking whether ${number} is even`);

if (isEven(number)) {
    console.log(`${number} is even`);
} else {
    console.log(`${number} is odd`);
}