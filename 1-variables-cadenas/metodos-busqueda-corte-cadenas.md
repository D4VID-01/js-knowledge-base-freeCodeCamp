# Método `includes()` en Strings

`includes()` verifica si una cadena contiene una subcadena específica.
Devuelve **únicamente** `true` o `false` — no indica posición ni frecuencia.

```js
string.includes(searchValue);
string.includes(searchValue, startIndex); // búsqueda desde índice específico
```

---

### Ejemplos

```js
let phrase = "JavaScript is awesome!";

phrase.includes("awesome");   // true  — encontrada
phrase.includes("Awesome");   // false — case-sensitive, "A" ≠ "a"
phrase.includes("script");    // false — "script" ≠ "Script" ni "JavaScript"
```

### Segundo argumento — posición de inicio

```js
let text = "Hello, JavaScript world!";
text.includes("JavaScript", 7);  // true  — busca desde índice 7 en adelante
```

---

### `includes()` vs `indexOf()`

| | `includes()` | `indexOf()` |
|---|---|---|
| Devuelve | `true` / `false` | índice o `-1` |
| Indica posición | ❌ | ✅ |
| Uso ideal | solo verificar existencia | necesitar ubicación exacta |

> Ambos son **case-sensitive**.


<br><br>


# Método `slice()` en Strings

`slice()` extrae una porción de una cadena y devuelve una **nueva cadena**,
sin modificar la original.

```js
string.slice(startIndex, endIndex);
```

- `startIndex` — índice donde comienza la extracción (incluido).
- `endIndex` — índice donde termina (excluido). Si se omite, extrae hasta el final.

---

### Ejemplos

```js
let message = "Hello, world!";

message.slice(0, 5);   // "Hello"  — índice 0 hasta antes del 5
message.slice(7);      // "world!" — desde índice 7 hasta el final
```

### Índices negativos — cuenta desde el final

```js
let message = "JavaScript is fun!";

message.slice(-4);     // "fun!"       — últimos 4 caracteres
```

### Combinando positivos y negativos

```js
let sentence = "Learning JavaScript is fun!";

sentence.slice(9, -5); // "JavaScript is" — desde 9 hasta 5 antes del final
```

---

### Puntos clave

| Comportamiento | Detalle |
|---|---|
| Modifica original | ❌ Nunca |
| `endIndex` incluido | ❌ Es excluido |
| Sin `endIndex` | extrae hasta el final |
| Índices negativos | cuentan desde el final |