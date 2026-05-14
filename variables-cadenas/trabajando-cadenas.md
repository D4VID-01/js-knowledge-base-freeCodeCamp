# Notación de Corchetes en Strings

Cada carácter de una cadena tiene un **índice** (posición), que comienza en `0`.
La notación de corchetes `[]` permite acceder a caracteres específicos por su índice.

```js
let greeting = "hello";
//              01234   ← índices

greeting[0]  // "h"
greeting[1]  // "e"
greeting[4]  // "o"
```

---

### Acceder al último carácter

Se usa la propiedad `length` menos uno, ya que el índice es base cero.

```js
let greeting = "hello";
greeting[greeting.length - 1]  // "o" (length=5, último índice=4)
```

---

### Acceder a múltiples caracteres

Se combina notación de corchetes con concatenación.

```js
let greeting = "hello";
let firstTwo = greeting[0] + greeting[1];
console.log(firstTwo); // "he"
```

---

### Puntos clave

- Los índices empiezan en `0`, no en `1`.
- `string[string.length]` devuelve `undefined` — el último índice válido es siempre `length - 1`.
- No permite agregar ni modificar caracteres (las cadenas son inmutables).
- Útil para extraer iniciales, validar letras específicas, etc.


<br><br>


# Nuevas Líneas y Escape de Caracteres en Strings

Cuando un carácter tiene significado especial para JavaScript, se usa una
**secuencia de escape** (`\` + carácter) para incluirlo como texto literal.

### Nueva línea — `\n`

```js
let poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);
// Roses are red,
// Violets are blue,
// JavaScript is fun,
// And so are you.
```

---

### Escape de comillas

Sin escape, JavaScript interpreta las comillas internas como el fin de la cadena
y lanza un error.

```js
let statement = "She said, "Hello!"";  // ❌ Error de sintaxis
```

```js
let statement = "She said, \"Hello!\"";
console.log(statement); // She said, "Hello!"

let quote = 'It\'s a beautiful day!';
console.log(quote);     // It's a beautiful day!
```

---

### Secuencias de escape comunes

| Secuencia | Resultado |
|---|---|
| `\n` | Nueva línea |
| `\"` | Comilla doble literal |
| `\'` | Comilla simple literal |
| `\\` | Barra invertida literal |


<br><br>


# Template Literals e Interpolación de Strings

Los **template literals** son cadenas definidas con comillas inversas (`` ` ``).
Ofrecen tres ventajas clave sobre las cadenas tradicionales.

### 1. Interpolación de strings — `${}`

Inserta variables o expresiones directamente en la cadena, sin operador `+`.

```js
// Concatenación tradicional (menos legible)
const message = "My name is " + name + " and I am " + age + " years old.";

// Template literal (más limpio)
const message = `My name is ${name} and I am ${age} years old.`;
```

---

### 2. Expresiones dentro de `${}`

Se puede incluir cualquier expresión JavaScript válida.

```js
const score = 9.5;
const highestScore = 10;
const output = `I rated it ${(score / highestScore) * 100}%.`;
console.log(output); // I rated it 95%.
```

---

### 3. Multilínea sin `\n`

El formato se preserva escribiendo directamente en varias líneas.

```js
let poem = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`;
```

---

### Resumen comparativo

| | Cadena tradicional | Template literal |
|---|---|---|
| Delimitador | `'` o `"` | `` ` `` |
| Variables | operador `+` | `${}` |
| Multilínea | requiere `\n` | salto de línea directo |
| Expresiones | no | sí, dentro de `${}` |


<br><br>


# Método `indexOf()` en Strings

`indexOf()` busca una subcadena dentro de una cadena y devuelve el **índice de su
primera ocurrencia**. Si no la encuentra, devuelve `-1`.

> Una **subcadena** es cualquier secuencia de caracteres dentro de una cadena mayor.

---

### Uso básico

```js
let sentence = "JavaScript is awesome!";

sentence.indexOf("awesome!");   // 14  — encontrada en índice 14
sentence.indexOf("fantastic");  // -1  — no encontrada
```

---

### Segundo argumento — posición de inicio

Indica desde qué índice comenzar la búsqueda. Útil para encontrar ocurrencias
posteriores de una subcadena repetida.

```js
let sentence = "JavaScript is awesome, and JavaScript is powerful!";

sentence.indexOf("JavaScript");      // 0  — primera ocurrencia
sentence.indexOf("JavaScript", 10);  // 27 — busca desde índice 10 en adelante
```

---

### Case-sensitive

`indexOf()` distingue mayúsculas de minúsculas.

```js
"freeCodeCamp".indexOf("F")  // -1 — "F" ≠ "f"
"freeCodeCamp".indexOf("f")  //  0 — encontrada
```

---

### Resumen de retornos

| Situación | Devuelve |
|---|---|
| Subcadena encontrada | índice de la primera ocurrencia |
| Subcadena no encontrada | `-1` |
| Búsqueda desde posición `n` | primera ocurrencia **a partir de** `n` |


<br><br>


# Método `prompt()`

`prompt()` abre un cuadro de diálogo emergente que solicita entrada al usuario
y la **devuelve como string**.

```js
prompt(message, default);
// message  — texto que se muestra al usuario
// default  — valor inicial del campo (opcional)
```

---

### Ejemplo

```js
const userName = prompt("What is your name?", "Guest");
// Si el usuario escribe "Alice" → userName = "Alice"
// Si el usuario cancela      → userName = null
```

---

### Comportamiento clave

| Acción del usuario | Valor devuelto |
|---|---|
| Escribe algo y presiona OK | el texto ingresado como `string` |
| Presiona OK sin escribir | `""` (cadena vacía) o el valor default |
| Presiona Cancelar | `null` |

> `prompt()` **detiene la ejecución del script** hasta que el usuario interactúa
> con el diálogo — nada más corre hasta que responde.

---

### Limitaciones

- Comportamiento inconsistente entre navegadores.
- Naturaleza disruptiva (interrumpe al usuario).
- Por eso se evita en aplicaciones web modernas y complejas.
- Útil principalmente para **pruebas rápidas o aplicaciones pequeñas**.