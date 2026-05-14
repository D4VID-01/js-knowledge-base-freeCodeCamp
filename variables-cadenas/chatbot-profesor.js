console.log("Hi there!");

const botName = "teacherBot"; // string literal
const greeting = `My name is ${botName}.`; // interpolación de variable
console.log(greeting);

const subject = "JavaScript";
const topic = "strings";

const sentence = `Today, you will learn about ${topic} in ${subject}.`; // múltiples variables interpoladas
console.log(sentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length); // propiedad length → 10

console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length); // → 7

console.log(`Here is an example of accessing the first letter in the word ${subject}.`);
console.log(subject[0]); // notación de corchetes → índice 0 → "J"

console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]); // índice 1 → "a"

console.log(`Here is an example of accessing the last letter in the word ${subject}.`);
const lastCharacter = subject[subject.length - 1]; // último índice = length - 1 → "t"
console.log(lastCharacter);

const learningIsFunSentence = "Learning is fun.";

console.log("Here are examples of finding the positions of substrings in the sentence.");

console.log(learningIsFunSentence.indexOf("Learning")); // → 0 (primera ocurrencia)
console.log(learningIsFunSentence.indexOf("fun"));      // → 12
console.log(learningIsFunSentence.indexOf("learning")); // → -1 (case-sensitive, no encontrado)

console.log("I hope you enjoyed learning today.");