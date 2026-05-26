# El Tipo `Number` en JavaScript

A diferencia de otros lenguajes, JavaScript usa un **único tipo `Number`** para
todos los valores numéricos: enteros, decimales y casos especiales.

```js
typeof 50        // "number"
typeof 4.5       // "number"
typeof -7        // "number"
```

---

### Tipos de valores numéricos

**Enteros** — números completos, positivos, negativos o cero.
```js
const a = 100;
const b = -25;
const c = 0;
```

**Punto flotante (floats)** — números con decimal. Útiles para precisión
en mediciones o divisas.
```js
const precio = 4.5;
const medida = 16.462;
```

**Infinity** — resultado de dividir por cero o exceder el límite superior del tipo.
```js
1 / 0              // Infinity
typeof (1 / 0)     // "number"
```

**NaN** (Not a Number) — resultado de operaciones matemáticas inválidas.
Paradójicamente, su tipo es `number`.
```js
'hello' / 2        // NaN
typeof ('hello'/2) // "number"
```

---

### Otros sistemas numéricos

JavaScript también soporta:

| Sistema | Base | Dígitos |
|---|---|---|
| Binario | 2 | `0`, `1` |
| Octal | 8 | `0`–`7` |
| Hexadecimal | 16 | `0`–`9`, `a`–`f` |


<br><br>


# Operadores Aritméticos en JavaScript

| Operador | Símbolo | Notas |
|---|---|---|
| Suma | `+` | El orden no importa |
| Resta | `-` | El orden **sí** importa |
| Multiplicación | `*` | El orden no importa |
| División | `/` | El orden **sí** importa |
| Resto | `%` | Devuelve el sobrante de la división |
| Exponenciación | `**` | Eleva a la potencia |

---

### Ejemplos clave

```js
10 + 5   // 15
10 - 5   // 5  |  5 - 10 = -5  (orden importa)
10 * 5   // 50
10 / 5   // 2  |  5 / 10 = 0.5 (orden importa)
10 / 0   // Infinity ⚠️ — evitar
10 % 3   // 1  — resto de 10 ÷ 3
2 ** 3   // 8  — 2 elevado a la 3
```

---

### Mezcla de operadores

Se pueden combinar en una sola expresión. El motor JS aplica
**precedencia de operadores** para determinar el orden de ejecución.

```js
10 + 5 * 2 - 8 / 4  // 18
```


<br><br>


# Coerción de Tipos en JavaScript

**Coerción de tipos** es la conversión automática de un tipo de dato a otro.
JavaScript la aplica al mezclar tipos en operaciones.


### Números + Strings

#### Con `+` → concatena (convierte número a string)
```js
5 + '10'   // "510"  → string
'10' + 5   // "105"  → string
```

#### Con `-`, `*`, `/` → convierte string a número
```js
'10' - 5   // 5    → number
'10' * 2   // 20   → number
'20' / 2   // 10   → number

'abc' - 5  // NaN  → number (conversión fallida)
'abc' * 2  // NaN  → number
```

---

### Booleanos en operaciones

`true` → `1`, `false` → `0` en contexto numérico.
Con string, se convierte a string y concatena.

```js
true + 1      // 2        → number
false + 1     // 1        → number
'Hello' + true // "Hellotrue" → string
```

---

### `null` y `undefined`

```js
null + 5      // 5   → number  (null = 0)
undefined + 5 // NaN → number  (undefined = NaN)
```

---

### Resumen de coerciones

| Operación | Resultado | Tipo |
|---|---|---|
| `número + string` | concatenación | `string` |
| `string - / * /` número | operación numérica | `number` |
| `string no-numérica - / * /` número | `NaN` | `number` |
| `true/false` + número | `1/0` + número | `number` |
| `null` + número | `0` + número | `number` |
| `undefined` + número | `NaN` | `number` |