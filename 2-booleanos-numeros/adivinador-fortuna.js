const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

const randomNumber = Math.floor(Math.random() * 5) + 1; // entero aleatorio entre 1 y 5 (inclusivo)

let selectedFortune; // declarada sin valor → undefined hasta que el if asigne uno

if (randomNumber === 1) {        // === igualdad estricta sin coerción de tipo
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else {                         // cubre el caso randomNumber === 5
  selectedFortune = fortune5;
}

console.log(selectedFortune); // imprime el fortune seleccionado aleatoriamente