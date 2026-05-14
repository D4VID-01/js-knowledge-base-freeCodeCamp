# Revisión: Strings en JavaScript

### Fundamentos

- String: secuencia de caracteres en comillas simples, dobles o acentos graves.
- Son **tipos primitivos** e **inmutables** — no se modifican, se crean nuevas cadenas.
- Índices base cero: primer carácter en posición `0`.

```js
const developer = "Jessica";
developer[0];  // "J"

const poem = "Roses are red,\nViolets are blue,";  // \n → nueva línea
const statement = "She said, \"Hello!\"";           // \" → comilla escapada
```

---

### Template Literals e Interpolación

```js
const name = "Jessica";
`Hello, ${name}!`  // "Hello, Jessica!" — variables directamente en la cadena
```

---

### ASCII / Unicode y métodos de código

JavaScript usa Unicode (UTF-16); los primeros 128 valores coinciden con ASCII.

```js
"A".charCodeAt(0)       // 65 — carácter → código numérico
String.fromCharCode(65) // "A" — código numérico → carácter
```

---

### Métodos de Strings

```js
const text = "The quick brown fox jumps over the lazy dog.";

// Búsqueda
text.indexOf("fox");      // 16 — índice primera ocurrencia (-1 si no existe)
text.includes("fox");     // true — existe? boolean

// Extracción
"freeCodeCamp".slice(0, 4);   // "free"
"freeCodeCamp".slice(4, 8);   // "Code"
"freeCodeCamp".slice(-4);     // "Camp"

// Caso
"hello".toUpperCase();  // "HELLO"
"HELLO".toLowerCase();  // "hello"

// Reemplazo
"I like cats".replace("cats", "dogs");               // primera ocurrencia
"cats and cats".replaceAll("cats", "dogs");          // todas las ocurrencias

// Repetición
"Hello".repeat(3);  // "HelloHelloHello"
// count=0 → "", negativo o Infinity → RangeError, decimal → redondea abajo

// Espacios en blanco
"  Hello!  ".trim();       // "Hello!"   — ambos lados
"  Hello!  ".trimStart();  // "Hello!  " — solo inicio
"  Hello!  ".trimEnd();    // "  Hello!" — solo final
```

---

### `prompt()`

Solicita input al usuario mediante un cuadro de diálogo; devuelve el texto como string
o `null` si cancela. Detiene la ejecución hasta que el usuario responde.

```js
const answer = window.prompt("What's your favorite animal?", "default");
```