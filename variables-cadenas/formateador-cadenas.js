const userInput = "   Hello World!   "; // string con espacios al inicio y final
console.log("Original input:");
console.log(userInput);

const cleanedInput = userInput.trim(); // elimina espacios de ambos lados → "Hello World!"
console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput);

const trimmedStart = userInput.trimStart(); // elimina solo espacios del inicio → "Hello World!   "
console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);

const trimmedEnd = userInput.trimEnd(); // elimina solo espacios del final → "   Hello World!"
console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd);

const upperCaseInput = cleanedInput.toUpperCase(); // convierte todo a mayúsculas → "HELLO WORLD!"
console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput);

const lowerCaseInput = cleanedInput.toLowerCase(); // convierte todo a minúsculas → "hello world!"
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput);

const lowercaseWord = "camelcase";
const camelCasedVersion = lowercaseWord.slice(0, 5)          // "camel" — índices 0 a 4
                        + lowercaseWord[5].toUpperCase()      // "C"     — índice 5 en mayúscula
                        + lowercaseWord.slice(-3);            // "ase"   — últimos 3 caracteres
console.log("Camel cased version:");
console.log(camelCasedVersion); // "camelCase"