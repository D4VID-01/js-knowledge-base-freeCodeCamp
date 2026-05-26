const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`; // template literal con interpolación

console.log(greeting);

console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");

const randomNum = Math.random(); // float aleatorio → [0, 1)
console.log(randomNum);

console.log("Now, generate a random number between two values.");

const min = 1;
const max = 100;

const randomNum2 = Math.random() * (max - min) + min; // float aleatorio entre min y max
console.log(randomNum2);

console.log("The Math.floor() method rounds the value down to the nearest whole integer.");

const numRoundedDown = Math.floor(6.7); // redondea hacia abajo → 6
console.log(numRoundedDown);

console.log("Now, generate a random integer between two values.");

const randomInt = Math.floor(Math.random() * (max - min) + min); // entero aleatorio entre min y max
console.log(randomInt);

console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");

const numRoundedUp = Math.ceil(3.2); // redondea hacia arriba → 4
console.log(numRoundedUp);

console.log("The Math.round() method rounds the value to the nearest whole integer.");

const numRounded = Math.round(2.7);  // decimal ≥ .5 → sube → 3
console.log(numRounded);
const numRounded2 = Math.round(11.2); // decimal < .5 → baja → 11
console.log(numRounded2);

console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");

const maxNum = Math.max(3, 125, 55, 24); // mayor del conjunto → 125
console.log(maxNum);
const minNum = Math.min(6, 90, 14, 90, 2); // menor del conjunto → 2
console.log(minNum);

console.log("It was fun learning about the different Math methods with you!");