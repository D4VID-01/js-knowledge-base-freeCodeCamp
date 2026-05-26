const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

const replacedString = originalString.replace("cats", "dogs"); // reemplaza primera ocurrencia → "I love dogs."
console.log("After using the replace() method:");
console.log(replacedString);

const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs"); // reemplaza TODAS las ocurrencias → "I love dogs and dogs are so much fun!"
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

const repeatedLove = "love ".repeat(3).trimEnd(); // repite 3 veces → "love love love " → trimEnd elimina espacio final → "love love love"
console.log(repeatedLove);

const newSentence = `I ${repeatedLove} learning.`; // interpolación → "I love love love learning."
console.log(newSentence);