# Booleanos y Operadores de Igualdad

Los **booleanos** solo tienen dos valores: `true` o `false`.
Su uso principal es tomar decisiones basadas en condiciones.

```js
let isOldEnoughToDrive = true;

if (isOldEnoughToDrive) {
  console.log("You're old enough to drive");
} else {
  console.log("Sorry, you are not old enough to drive");
}
```

---

### Operadores de igualdad

#### `==` — Igualdad (con coerción de tipo)
Convierte los valores al mismo tipo antes de comparar.
```js
5 == "5"   // true — "5" se convierte a número
```

#### `===` — Igualdad estricta (sin coerción)
Compara valor **y** tipo. Sin conversión.
```js
5 === "5"  // false — number ≠ string
```

---

### Operadores de desigualdad

#### `!=` — Desigualdad (con coerción de tipo)
```js
5 != "5"   // false — los convierte y son iguales
```

#### `!==` — Desigualdad estricta (sin coerción)
```js
5 !== "5"  // true — number ≠ string, son distintos
```

---

### Resumen

| Operador | Coerción | Compara |
|---|---|---|
| `==` | ✅ | solo valor |
| `===` | ❌ | valor **y** tipo |
| `!=` | ✅ | solo valor |
| `!==` | ❌ | valor **y** tipo |

> **Buena práctica:** preferir siempre `===` y `!==` — resultados más
> predecibles, sin sorpresas por coerción de tipo.


<br><br>


# Operadores de Comparación

Comparan dos valores y devuelven `true` o `false`. Se usan en `if`, bucles
y cualquier situación que requiera tomar decisiones basadas en condiciones.

---

### Operadores disponibles

| Operador | Significado | Ejemplo | Resultado |
|---|---|---|---|
| `>` | Mayor que | `6 > 9` | `false` |
| `>=` | Mayor o igual que | `6 >= 6` | `true` |
| `<` | Menor que | `6 < 9` | `true` |
| `<=` | Menor o igual que | `9 <= 6` | `false` |

```js
let a = 6, b = 9, c = 6;

a > b   // false  |  b > a   // true
a >= c  // true   |  b >= a  // true
a < b   // true   |  b < a   // false
a <= c  // true   |  b <= a  // false
```

---

### Nota sobre coerción de tipos

Los operadores de comparación (`>`, `>=`, `<`, `<=`) pueden aplicar coerción.
Los únicos que **evitan** coerción de tipo son `===` y `!==`.