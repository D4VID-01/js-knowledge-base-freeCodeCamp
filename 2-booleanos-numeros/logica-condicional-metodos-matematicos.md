# Declaraciones Condicionales en JavaScript

Permiten controlar el flujo del programa según condiciones.


### Valores Truthy y Falsy

En un contexto booleano (como un `if`), JavaScript evalúa cualquier valor como
`true` o `false`.

| Falsy | Truthy |
|---|---|
| `false` | `true` |
| `0` | Cualquier número ≠ 0 |
| `""` (cadena vacía) | Cadenas no vacías |
| `null` | Arrays |
| `undefined` | Objetos |
| `NaN` | — |

---

### `if` / `else` / `else if`

```js
const age = 15;

if (age >= 18) {
  console.log("Eligible to vote");       // condición true
} else {
  console.log("Not eligible to vote");   // condición false → se ejecuta este
}
```

#### Múltiples condiciones con `else if`

```js
const score = 87;

if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');  // ← se ejecuta este
} else if (score >= 70) {
  console.log('C');
} else {
  console.log('Failed');
}
```

> `else` se ejecuta **solo cuando** la condición `if` (y todos los `else if`) son `false`.

---

### Operador Ternario — `if/else` compacto

```js
condition ? expressionIfTrue : expressionIfFalse;
```

```js
const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';
console.log(`It's a ${weather} day!`); // "It's a sunny day!"
```

---

### ¿Cuándo usar cada uno?

| Situación | Usar |
|---|---|
| Condición simple, lógica corta | Operador ternario |
| Múltiples condiciones o lógica compleja | `if / else if / else` |


<br><br>


# Operadores Lógicos Binarios

Evalúan dos expresiones y devuelven un resultado basado en su veracidad.


### `&&` AND lógico — ambos deben ser truthy

| Situación | Devuelve |
|---|---|
| Ambos truthy | el **segundo** valor |
| Alguno falsy | el primer valor **falsy** |

```js
true && 'hello'   // "hello"  — ambos truthy → devuelve el segundo
0 && 3            // 0        — 0 es falsy → devuelve el primero
false && 0        // false    — primer falsy encontrado
```

```js
if (2 < 3 && 3 < 4) {
  console.log('The if block runs'); // ambas condiciones true → se ejecuta
}
```

---

### `||` OR lógico — al menos uno debe ser truthy

| Situación | Devuelve |
|---|---|
| Primer operando truthy | el **primer** valor |
| Primer falsy, segundo truthy | el **segundo** valor |

```js
'This is truthy' || false   // "This is truthy" — primero es truthy
0 || 'This is truthy'       // "This is truthy" — primero falsy, segundo truthy
```

```js
let userInput; // undefined

if (userInput || 'Guest') {
  console.log('A user is present'); // "Guest" es truthy → se ejecuta
}
```

---

### `??` Nullish Coalescing — solo activa si es `null` o `undefined`

A diferencia de `||`, **ignora** otros falsy como `0` o `false`.
Solo usa el valor de reserva cuando el primero es `null` o `undefined`.

```js
null ?? 'default'   // "default" — null activa el fallback
0 ?? 'default'      // 0         — 0 NO es null/undefined, se respeta
```

```js
const userSettings = { theme: null, volume: 0, notifications: false };

let theme = userSettings.theme ?? 'light';
console.log(theme); // "light" — theme es null → usa fallback
```

---

### Comparativa clave

| Operador | Activa fallback cuando |
|---|---|
| `\|\|` | valor es **falsy** (`0`, `""`, `null`, etc.) |
| `??` | valor es **solo** `null` o `undefined` |


<br><br>


# El Objeto `Math` en JavaScript

Proporciona métodos para operaciones matemáticas más allá de los operadores básicos.


### Métodos de redondeo

| Método | Comportamiento | Ejemplo |
|---|---|---|
| `Math.ceil()` | Siempre redondea **hacia arriba** | `Math.ceil(4.3)` → `5` |
| `Math.floor()` | Siempre redondea **hacia abajo** | `Math.floor(4.7)` → `4` |
| `Math.round()` | Redondea al más cercano (`.5` sube) | `Math.round(4.5)` → `5`, `Math.round(2.3)` → `2` |
| `Math.trunc()` | Elimina decimales **sin redondear** | `Math.trunc(2.9)` → `2` |

> `Math.round()` es el híbrido de `ceil` y `floor`: usa ambos según el decimal.

---

### Métodos de valor

```js
Math.min(1, 5, 3, 9)   // 1  — valor mínimo del conjunto
Math.max(1, 5, 3, 9)   // 9  — valor máximo del conjunto
Math.abs(-5)           // 5  — valor absoluto (negativo → positivo)
Math.pow(2, 3)         // 8  — 2 elevado a la 3
Math.sqrt(81)          // 9  — raíz cuadrada
Math.cbrt(27)          // 3  — raíz cúbica
```

---

### Aleatoriedad

```js
Math.random()  // float entre 0 (incluido) y 1 (excluido)

// Número aleatorio entre min y max (enteros)
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

// Número aleatorio entre 1 y 20
Math.floor(Math.random() * 20) + 1;
```

---

### Resumen rápido

| Método | Para |
|---|---|
| `Math.random()` | Número aleatorio 0–1 |
| `Math.min/max()` | Menor/mayor de un conjunto |
| `Math.ceil/floor/round/trunc()` | Redondeo con distintos criterios |
| `Math.abs()` | Valor absoluto |
| `Math.pow()` | Potencia |
| `Math.sqrt/cbrt()` | Raíz cuadrada/cúbica |