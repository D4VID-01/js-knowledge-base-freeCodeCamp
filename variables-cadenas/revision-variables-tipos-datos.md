# Revisión: Variables y Tipos de Datos en JavaScript

### El trio web
HTML estructura, CSS estiliza, JavaScript aporta **interactividad y comportamiento dinámico**.

---

### Tipos de datos

| Tipo | Ejemplo |
|---|---|
| `Number` | `42`, `3.14` |
| `String` | `"Hello"`, `'World'` |
| `Boolean` | `true`, `false` |
| `Undefined` | variable declarada sin valor |
| `Null` | valor vacío asignado intencionalmente |
| `Object` | `{ name: "Fluffy", age: 3 }` |
| `Symbol` | único e inmutable — dos símbolos iguales **no** son iguales |
| `BigInt` | `1234567890123456789n` |

```js
const crypticKey1 = Symbol("saltNpepper");
const crypticKey2 = Symbol("saltNpepper");
console.log(crypticKey1 === crypticKey2); // false
```

---

### Variables

```js
let cityName = "New York";
cityName = "Los Angeles";  // ✅ reasignación permitida con let

const PI = 3.14;
PI = 3;                    // ❌ TypeError — const no se puede reasignar
```

#### Convenciones de nombres
- **camelCase**: `cityName`, `isLoggedIn`
- Empezar con letra, `_` o `$` — nunca con número
- Sin espacios, caracteres especiales (excepto `_` y `$`), ni palabras reservadas
- Case-sensitive: `age` ≠ `Age`

---

### Strings e inmutabilidad

Las cadenas no pueden modificarse directamente; se reasignan a una nueva cadena.

```js
let firstName = "John";
firstName = "Jane"; // nueva cadena, no modificación de la original
```

#### Concatenación

```js
// Operador +
let info = "Asad" + " is " + 25 + " years old.";

// Operador +=
let message = "Welcome, ";
message += "Asad!";

// Método concat()
let fullName = "John".concat(" ", "Doe"); // "John Doe"
```

---

### Herramientas del lenguaje

**`console.log()`** — registra valores en la consola para depurar.  
**`;`** — marca el final de una sentencia; previene ambigüedades.  
**`//`** y **`/* */`** — comentarios de una línea y multilínea respectivamente.

---

### Tipado dinámico y `typeof`

JavaScript determina el tipo **en tiempo de ejecución** automáticamente.

```js
let error = 404;        // number
error = "Not Found";    // string — sin error
```

```js
typeof 42                          // "number"
typeof "Hello"                     // "string"
typeof true                        // "boolean"
typeof undefined                   // "undefined"
typeof null                        // "object" ⚠️ error histórico
typeof { name: "Fluffy", age: 3 }  // "object"
typeof Symbol("id")                // "symbol"
typeof 123n                        // "bigint"
```