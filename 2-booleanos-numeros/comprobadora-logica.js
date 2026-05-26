const hasDeveloperJob = true; // boolean true

if (hasDeveloperJob) { // condición true → ejecuta el bloque
  console.log("Timmy is employed as a developer.");
}

const isTimmyAGamer = false; // boolean false

if (isTimmyAGamer) { // condición false → bloque ignorado
  console.log("Timmy loves to play World of Warcraft.");
}

const timmyAge = 13;

if (timmyAge >= 16) { // operador >= : 13 >= 16 → false
  console.log("Timmy is old enough to drive.");
} else { // ejecuta el else porque la condición fue false
  console.log("Timmy is not old enough to drive.");
}