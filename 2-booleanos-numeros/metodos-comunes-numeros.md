# `NaN` e `isNaN` en JavaScript

**NaN** (*Not a Number*) es un valor especial que representa un resultado numérico
no válido o indefinido. Paradójicamente, su tipo es `number`.

```js
0 / 0              // NaN — matemáticamente indefinido
typeof NaN         // "number"
NaN === NaN        // false — NaN no es igual a nada, ni a sí mismo
```

---

### `isNaN()` — global, con coerción de tipo

Intenta convertir el valor a número **antes** de verificar.
Puede producir resultados inesperados.

```js
isNaN(NaN)         // true
isNaN(undefined)   // true  — undefined no puede convertirse
isNaN("blabla")    // true  — no es convertible a número
isNaN("37")        // false — "37" se convierte a 37
isNaN("")          // false — cadena vacía se convierte a 0
isNaN(null)        // false — null se convierte a 0
isNaN(true)        // false — true se convierte a 1
```

---

### `Number.isNaN()` — estricto, sin coerción (ES6)

Solo devuelve `true` si el valor es **exactamente** `NaN`. Sin conversiones.

```js
Number.isNaN(NaN)        // true
Number.isNaN(0 / 0)      // true
Number.isNaN("NaN")      // false — es string, no NaN real
Number.isNaN(undefined)  // false
Number.isNaN("blabla")   // false
```

---

### Uso práctico

```js
let result = 0 / 0;

if (Number.isNaN(result)) {
  result = "Error: Division resulted in NaN";
}
console.log(result); // "Error: Division resulted in NaN"
```

---

### Comparativa

| | `isNaN()` | `Number.isNaN()` |
|---|---|---|
| Coerción de tipo | ✅ Sí | ❌ No |
| Confiabilidad | Menor | **Mayor** |
| Recomendado | No | **Sí** |

> Usar siempre `Number.isNaN()` para verificaciones precisas y predecibles.


<br><br>


# `parseFloat()` y `parseInt()`

Convierten cadenas en números, leyendo desde el **inicio** de la cadena
hasta encontrar un carácter inválido.


### `parseFloat()` — extrae número decimal

```js
parseFloat("3.14")      // 3.14 — número válido
parseFloat("3.14 abc")  // 3.14 — se detiene en el espacio
parseFloat("3.14.5")    // 3.14 — segundo punto es inválido
parseFloat("abc 3.14")  // NaN  — no empieza con número
```

### `parseInt()` — extrae número entero

```js
parseInt("42")          // 42   — entero válido
parseInt("42px")        // 42   — se detiene en "p"
parseInt("3.14")        // 3    — ignora decimales
parseInt("10.99")       // 10   — solo parte entera
parseInt("abc123")      // NaN  — no empieza con número
```

---

### Comportamientos compartidos

```js
// Ignoran espacios en blanco al inicio
parseFloat("  3.14")    // 3.14
parseInt("  -42abc")    // -42

// Manejan signos + y -
parseFloat("+3.14")     // 3.14
parseInt("-42")         // -42
```

---

### Comparativa

| | `parseFloat()` | `parseInt()` |
|---|---|---|
| Devuelve | float (decimal) | entero |
| Se detiene en | carácter no numérico | primer no-dígito |
| Decimales | ✅ los conserva | ❌ los descarta |
| Inicio inválido | `NaN` | `NaN` |


<br><br>


# Método `toFixed()`

Formatea un número controlando cuántos decimales se muestran.
**Siempre devuelve una `string`**, no un número — está diseñado para
visualización, no para cálculos posteriores.

```js
numero.toFixed(digitos)
```

---

### Uso básico

```js
let num = 3.14159;

num.toFixed(2)   // "5.7"  — 2 decimales
num.toFixed(3)   // "3.142"
num.toFixed()    // "3"    — sin argumento → 0 decimales (redondea al entero)
```

---

### Redondeo

Redondea **hacia arriba** si el siguiente dígito es `5` o mayor,
**hacia abajo** en caso contrario.

```js
(3.14159).toFixed(3)  // "3.142" — 5 → sube
(3.14449).toFixed(3)  // "3.144" — 4 → baja
(5.678).toFixed(1)    // "5.7"   — 7 → sube
```

---

### Caso de uso típico — moneda

```js
let price = 19.99;
let taxRate = 0.08;
let total = price + (price * taxRate);

console.log("Total: $" + total.toFixed(2)); // "Total: $21.59"
```

Garantiza exactamente 2 decimales, estándar para valores monetarios.

---

### Puntos clave

- Devuelve **siempre** una `string`.
- Sin argumento → `0` decimales (no lanza error).
- Redondea siguiendo la regla estándar matemática (`≥ 5` sube).