# Método `replace()` en Strings

`replace()` busca un valor en una cadena y lo reemplaza por otro.
Devuelve una **nueva cadena** — la original no se modifica (inmutabilidad).

```js
string.replace(searchValue, newValue);
```

---

### Uso básico

```js
let text = "I love JavaScript!";
text.replace("JavaScript", "coding");  // "I love coding!"
```

---

### Comportamientos clave

**1. Solo reemplaza la primera ocurrencia**
```js
let phrase = "Hello, world! Welcome to the world of coding.";
phrase.replace("world", "universe");
// "Hello, universe! Welcome to the world of coding."
//                              ^^^^^ — esta no se reemplaza
```

**2. Case-sensitive — debe coincidir exactamente**
```js
let sentence = "I enjoy working with JavaScript.";
sentence.replace("javascript", "coding");
// "I enjoy working with JavaScript." — sin cambios, "j" ≠ "J"
```

---

### Notas

- `searchValue` puede ser una cadena o una **expresión regular** (regex),
  lo que permite patrones de búsqueda más complejos.
- Para reemplazar **todas** las ocurrencias se necesita regex u otros métodos
  (a cubrir en lecciones futuras).


  <br><br>


# Método `repeat()` en Strings

`repeat()` repite una cadena un número específico de veces y devuelve una nueva cadena.

```js
string.repeat(count);
```

```js
let word = "Hello!";
word.repeat(3);  // "Hello!Hello!Hello!"

let count = 4;
word.repeat(count);  // valor dinámico — también válido
```

---

### Límites y casos especiales

| `count` | Resultado |
|---|---|
| Entero positivo (`3`) | repite la cadena `n` veces |
| `0` | `""` — cadena vacía |
| Decimal (`2.5`) | se redondea hacia abajo → `repeat(2)` |
| Negativo (`-1`) | ❌ `RangeError` |
| `Infinity` | ❌ `RangeError` |

```js
"Test".repeat(0);        // ""
"Test".repeat(2.5);      // "TestTest"
"Test".repeat(-1);       // RangeError
"Test".repeat(Infinity); // RangeError
```

---

### Utilidad

Simplifica generación de patrones repetidos sin necesidad de bucles,
y admite variables como argumento para repeticiones dinámicas.