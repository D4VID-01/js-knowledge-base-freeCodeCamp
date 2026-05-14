# `toUpperCase()` y `toLowerCase()`

Ambos métodos transforman el caso de una cadena y devuelven una **nueva cadena**
sin modificar la original.

```js
let greeting = "Hello, World!";

greeting.toUpperCase();  // "HELLO, WORLD!"
greeting.toLowerCase();  // "hello, world!"

console.log(greeting);   // "Hello, World!" — original intacta
```

---

### Casos de uso

| Método | Útil para |
|---|---|
| `toUpperCase()` | Énfasis, encabezados, consistencia visual |
| `toLowerCase()` | Estandarizar input, comparaciones sin distinción de mayúsculas |

### Ejemplo práctico — comparación case-insensitive

```js
let phrase = "JavaScript is Fun!";
phrase.toLowerCase();  // "javascript is fun!"

// Estandarizar antes de comparar entradas de usuario
userInput.toLowerCase() === "javascript"  // funciona sin importar el caso original
```


<br><br>


# Eliminar Espacios en Blanco en Strings

Los **espacios en blanco** (espacios, tabulaciones, saltos de línea) al inicio o
final de una cadena pueden interferir con comparaciones, almacenamiento y
visualización. Ninguno de estos métodos modifica la cadena original.


### `trim()` — elimina ambos lados

```js
let message = "   Hello!   ";
message.trim();  // "Hello!"
```

> Los espacios **entre palabras** dentro de la cadena se preservan.

---

### `trimStart()` y `trimEnd()` — control preciso

```js
let greeting = "   Hello!   ";

greeting.trimStart();  // "Hello!   " — solo elimina inicio
greeting.trimEnd();    // "   Hello!" — solo elimina final
```

---

### Resumen

| Método | Elimina espacios |
|---|---|
| `trim()` | inicio y final |
| `trimStart()` | solo inicio |
| `trimEnd()` | solo final |

**Uso típico:** limpiar input de usuario antes de comparar o almacenar.