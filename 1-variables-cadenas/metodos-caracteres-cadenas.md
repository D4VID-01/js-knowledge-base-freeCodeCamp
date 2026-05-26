# ASCII, `charCodeAt()` y `fromCharCode()`

**ASCII** (*American Standard Code for Information Interchange*) es un estándar que
asigna un valor numérico a cada carácter, permitiendo a las computadoras almacenar
y manipular texto. Cubre 128 caracteres: letras (A-Z, a-z), números (0-9),
signos de puntuación y caracteres de control.

> JavaScript usa Unicode (UTF-16) internamente, pero los primeros 128 valores
> coinciden con ASCII, por lo que estos métodos funcionan igual para caracteres básicos.

---

### Referencias rápidas ASCII

| Carácter | Código |
|---|---|
| `A` | 65 |
| `a` | 97 |
| `B` | 66 |
| `!` | 33 |

---

### `charCodeAt()` — carácter → número

Devuelve la unidad de código UTF-16 del carácter en el índice especificado.

```js
"A".charCodeAt(0)  // 65
"!".charCodeAt(0)  // 33
```

---

### `String.fromCharCode()` — número → carácter

Convierte un código numérico en su carácter correspondiente.

```js
String.fromCharCode(65)  // "A"
String.fromCharCode(97)  // "a"
String.fromCharCode(66)  // "B"
```

---

### Utilidad práctica

- `charCodeAt()` → verificar si un carácter es mayúscula, minúscula o dígito
  comparando su valor numérico.
- `fromCharCode()` → generar caracteres dinámicamente a partir de sus códigos.