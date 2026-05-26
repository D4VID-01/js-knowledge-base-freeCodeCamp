# Comparaciones con `null` y `undefined`

Ambos representan ausencia de valor, pero se comportan diferente en comparaciones.

- **`undefined`** — variable declarada sin valor asignado (por defecto).
- **`null`** — ausencia de valor asignada **intencionalmente**.

---

### Entre sí

```js
null == undefined   // true  — == hace coerción, los trata como iguales
null === undefined  // false — === verifica tipo Y valor, son distintos
```

---

### Con otros valores usando `==`

`null` y `undefined` **solo** son iguales entre sí — con cualquier otro valor devuelven `false`.

```js
null == 0       // false
null == ''      // false
undefined == 0  // false
undefined == '' // false
```

---

### Comportamiento especial de `null` con comparadores

```js
null > 0    // false
null == 0   // false
null >= 0   // true  ⚠️ comportamiento inesperado
```

---

### `undefined` en contextos numéricos → siempre `NaN`

Todas las comparaciones numéricas con `undefined` devuelven `false`.

```js
undefined > 0   // false
undefined < 0   // false
undefined == 0  // false
```

---

### Recomendación

> Usar siempre `===` al comparar valores, especialmente con `null` y `undefined`,
> para evitar coerciones inesperadas y hacer el código más predecible.


<br><br>


# Sentencias `switch`

Evalúa una expresión y la compara contra múltiples valores posibles.
Usa **igualdad estricta** (`===`) — sin coerción de tipos.

```js
switch (expression) {
  case value1:
    // código si expression === value1
    break;
  case value2:
    // código si expression === value2
    break;
  default:
    // código si no coincide ningún case
}
```

---

### `break` — crucial

Sin `break`, el programa continúa ejecutando los casos siguientes aunque
no coincidan — comportamiento conocido como **fall-through**.

```js
let dayOfWeek = 3;

switch (dayOfWeek) {
  case 1: console.log("Monday");   break;
  case 2: console.log("Tuesday");  break;
  case 3: console.log("Wednesday"); break; // ← se ejecuta este
  case 4: console.log("Thursday"); break;
  default: console.log("Invalid day");
}
```

---

### `switch` vs `if/else`

| | `switch` | `if/else if` |
|---|---|---|
| Ideal para | Una variable vs muchos valores | Condiciones complejas, múltiples variables |
| Comparación | `===` estricta | Flexible |
| Legibilidad | Mayor con muchos casos simples | Mayor con lógica compleja |
| Flexibilidad | Menor | Mayor |

```js
// switch — mejor aquí (una variable, muchos valores)
switch (dayOfWeek) { ... }

// if/else — mejor aquí (múltiples variables, lógica compleja)
if (creditScore >= 750 && annualIncome >= 80000) { ... }
else if (creditScore >= 700 && annualIncome >= 50000) { ... }
```

> La elección depende del escenario: `switch` para múltiples valores de
> una sola variable; `if/else` para condiciones complejas o múltiples variables.