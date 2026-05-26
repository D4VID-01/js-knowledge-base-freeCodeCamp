# Revisión: Matemáticas en JavaScript

### Tipo `Number`

Incluye enteros, flotantes, `Infinity` (positivo y negativo) y `NaN`.
Todos comparten el mismo tipo: `number`.

---

### Operadores Aritméticos

| Operador | Símbolo | Nota especial |
|---|---|---|
| Suma | `+` | Con string → concatena |
| Resta | `-` | Con string → convierte a número |
| Multiplicación | `*` | Con string → convierte a número |
| División | `/` | `n / 0` → `Infinity` |
| Resto | `%` | Devuelve sobrante |
| Exponenciación | `**` | Asociatividad derecha→izquierda |

```js
5 + '10'   // "510" string
'10' - 5   // 5     number
null + 5   // 5     (null = 0)
undefined + 5 // NaN
```

---

### Precedencia y Asociatividad

`()` > `**` > `* /` > `+ -`

```js
(2 + 3) * 4    // 20 — paréntesis primero
2 ** 3 ** 2    // 512 — derecha a izquierda: 3**2=9, luego 2**9
5 ** 4 ** 1    // 625 — 4**1=4, luego 5**4
10 - 2 + 3     // 11  — izquierda a derecha
```

---

### Incremento y Decremento

```js
let x = 5;
++x   // 6 — incrementa primero, devuelve nuevo valor
x++   // devuelve actual, luego incrementa

--x   // decrementa primero
x--   // devuelve actual, luego decrementa
```

---

### Asignación Compuesta

```js
x += 5   // suma        x -= 5  // resta
x *= 3   // multiplica  x /= 2  // divide
x %= 3   // resto       x **= 2 // potencia
```

---

### Booleanos e Igualdad

```js
5 == '5'    // true  — con coerción
5 === '5'   // false — sin coerción (valor Y tipo)
5 != '5'    // false
5 !== '5'   // true
```

> Preferir siempre `===` y `!==`.

---

### Operadores de Comparación

`>` `>=` `<` `<=` — devuelven `true` o `false`.

---

### Operadores Unarios

```js
+'42'   // 42      — convierte a número
-4      // -4      — niega
!true   // false   — invierte booleano
```

---

### Bitwise (Nivel de Bits)

| Operador | Símbolo | Acción |
|---|---|---|
| AND | `&` | 1 solo si ambos bits son 1 |
| OR | `\|` | 1 si alguno es 1 |
| XOR | `^` | 1 si uno pero no ambos |
| NOT | `~` | Invierte todos los bits |
| Left shift | `<<` | Desplaza bits a la izquierda |
| Right shift | `>>` | Desplaza bits a la derecha |

---

### Condicionales

```js
// if / else if / else
if (score >= 90) { console.log('A') }
else if (score >= 80) { console.log('B') }
else { console.log('Failed') }

// Ternario — para lógica simple
temperature > 25 ? 'sunny' : 'cool'
```

**Truthy:** strings no vacías, números ≠ 0, arrays, objetos, `true`
**Falsy:** `false`, `0`, `""`, `null`, `undefined`, `NaN`

---

### Operadores Lógicos Binarios

```js
true && 'hello'          // "hello" — ambos truthy → devuelve segundo
0 && 3                   // 0       — falsy → devuelve primero
'truthy' || false        // "truthy"— primero truthy → lo devuelve
null ?? 'light'          // "light" — solo activa con null/undefined
```

---

### Objeto `Math`

```js
Math.random()      // [0, 1)
Math.max(1,5,3)    // 5
Math.min(1,5,3)    // 1
Math.ceil(4.3)     // 5
Math.floor(4.7)    // 4
Math.round(4.5)    // 5
Math.trunc(4.9)    // 4  — sin redondear
Math.sqrt(81)      // 9
Math.cbrt(27)      // 3
Math.abs(-5)       // 5
Math.pow(2,3)      // 8
```

---

### Métodos Numéricos

```js
// isNaN — con coerción (menos confiable)
isNaN("blabla")        // true
isNaN("37")            // false — "37" → 37

// Number.isNaN — sin coerción (recomendado)
Number.isNaN(NaN)      // true
Number.isNaN("NaN")    // false

// parseFloat / parseInt
parseFloat("3.14abc")  // 3.14
parseInt("42px")       // 42
parseInt("3.14")       // 3  — solo parte entera

// toFixed — devuelve string
(3.14159).toFixed(2)   // "3.14"
(19.99 * 1.08).toFixed(2) // "21.59"
```