const fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp"); // true — subcadena encontrada
console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);

const hasJavaScript = fccSentence.includes("JavaScript"); // false — no existe en la cadena
console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);

const hasLowercaseFCC = fccSentence.includes("freecodecamp"); // false — case-sensitive
console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);

const message = "Welcome to freeCodeCamp!";
//               0123456789...            — índices de referencia

console.log("Here are some examples of the slice() method:");

const platform = message.slice(11, 23); // índice 11 hasta antes del 23 → "freeCodeCamp"
console.log(`The word "${platform}" was sliced from the message.`);

const greetingWord = message.slice(0, 7); // índice 0 hasta antes del 7 → "Welcome"
console.log(`The first word is "${greetingWord}".`);

const endPunctuation = message.slice(-1); // último carácter → "!"
console.log(`The ending punctuation mark is a "${endPunctuation}"`);

console.log("Workshop complete! You now know how to use includes() and slice().");