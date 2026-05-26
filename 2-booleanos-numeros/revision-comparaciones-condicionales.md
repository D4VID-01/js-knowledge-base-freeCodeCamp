# Revisión: Comparaciones y Condicionales

### `null` y `undefined` en comparaciones

| | En contexto numérico | Resultado |
|---|---|---|
| `undefined` | Se convierte en `NaN` | Toda comparación numérica → `false` |
| `null` | Se convierte en `0` | Puede ser inesperado |

```js
// undefined → NaN
undefined < 0   // false
undefined >= 0  // false

// null → 0
null < 0    // false  (0 < 0)
null >= 0   // true   (0 >= 0) ⚠️
```

#### Igualdad entre `null` y `undefined`

```js
null == undefined   // true  — solo son iguales entre sí
null == 0           // false
undefined == NaN    // false

null === undefined  // false — tipos distintos
```

---

### `switch`

Evalúa una expresión y la compara con `===` contra cada `case`.

```js
const dayOfWeek = 3;

switch (dayOfWeek) {
  case 1: console.log("Monday");    break;
  case 2: console.log("Tuesday");   break;
  case 3: console.log("Wednesday"); break; // ← coincide, se ejecuta
  case 4: console.log("Thursday");  break;
  default: console.log("Invalid");        // opcional, va al final
}
```

**Puntos clave:**
- `break` termina el `case` — sin él ocurre **fall-through** (continúa al siguiente).
- `default` es **opcional** y solo se ejecuta si ningún `case` coincide.
- Comparación siempre **estricta** (`===`) — sin coerción de tipos.