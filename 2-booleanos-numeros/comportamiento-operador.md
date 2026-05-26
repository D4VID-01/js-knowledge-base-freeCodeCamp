# Precedencia de Operadores en JavaScript

La **precedencia de operadores** determina el orden en que se evalúan las
operaciones. Igual que en matemáticas: `*` y `/` antes que `+` y `-`.

```js
2 + 3 * 4   // 14 — primero 3*4=12, luego 2+12
2 + 6 / 3   // 4  — primero 6/3=2,  luego 2+2
```

---

### Paréntesis — sobreescribe la precedencia

Cualquier expresión dentro de `()` se evalúa **primero**, sin excepción.

```js
(2 + 3) * 4  // 20 — primero 2+3=5, luego 5*4
```

---

### Asociatividad — cuando la precedencia es igual

Define si se evalúa de **izquierda a derecha** o de **derecha a izquierda**.

#### Izquierda → derecha (mayoría de operadores)
```js
10 - 2 + 3  // 11 — primero 10-2=8, luego 8+3
```

#### Derecha → izquierda (`=` y `**`)
```js
a = b = 5      // b=5 primero, luego a=5

2 ** 3 ** 2    // 512 — primero 3**2=9, luego 2**9
// NO es (2**3)**2=64
```

---

### Resumen de precedencia

| Mayor precedencia | `**`, `*`, `/` |
|---|---|
| Menor precedencia | `+`, `-` |
| Sobreescribe todo | `()` paréntesis |


<br><br>


# Operadores de Incremento y Decremento

`++` y `--` ajustan el valor de una variable en `1`, como alternativa limpia a
`x = x + 1` o `x = x - 1`.

---

### Dos formas: prefijo y postfijo

| Forma | Sintaxis | Comportamiento |
|---|---|---|
| **Prefijo** | `++x` / `--x` | Modifica **primero**, luego devuelve el nuevo valor |
| **Postfijo** | `x++` / `x--` | Devuelve el valor actual **primero**, luego modifica |

---

### Incremento `++`

```js
let x = 5;
console.log(++x); // 6 — incrementa primero, devuelve 6
console.log(x);   // 6

let y = 5;
console.log(y++); // 5 — devuelve 5 primero, luego incrementa
console.log(y);   // 6
```

### Decremento `--`

```js
let x = 5;
console.log(--x); // 4 — decrementa primero
console.log(x);   // 4

let y = 5;
console.log(y--); // 5 — devuelve 5 primero, luego decrementa
console.log(y);   // 4
```

---

### ¿Cuándo importa la diferencia?

Solo cuando se usa el valor **inmediatamente en una expresión**.

```js
let a = 5;
let b = ++a;  // b = 6 — valor actualizado antes de asignar

let c = 5;
let d = c++;  // d = 5 — valor original antes de asignar
```

> Usa **prefijo** si necesitas el valor actualizado de inmediato.
> Usa **postfijo** si necesitas el valor actual y el incremento puede esperar.


<br><br>


# Operadores de Asignación Compuesta

Combinan una operación aritmética y la asignación en un solo paso,
evitando repetir el nombre de la variable.

```js
// Sin operador compuesto    // Con operador compuesto
num = num + 2                num += 2
```

---

### Operadores principales

```js
let n = 10;

n += 5;   // n = 10 + 5  → 15
n -= 7;   // n = 15 - 7  → 8  (si n fuera 20 → 13)
n *= 3;   // n = n * 3
n /= 4;   // n = n / 4
n %= 3;   // n = n % 3   — asigna el residuo
n **= 2;  // n = n ** 2  — asigna la potencia
```

---

### Tabla completa

| Operador | Equivale a | Descripción |
|---|---|---|
| `+=` | `x = x + y` | Suma y asigna |
| `-=` | `x = x - y` | Resta y asigna |
| `*=` | `x = x * y` | Multiplica y asigna |
| `/=` | `x = x / y` | Divide y asigna |
| `%=` | `x = x % y` | Residuo y asigna |
| `**=` | `x = x ** y` | Potencia y asigna |
| `&=` | `x = x & y` | AND bit a bit y asigna |
| `\|=` | `x = x \| y` | OR bit a bit y asigna |

> Existe un operador de asignación compuesta para **cada** operador en JavaScript.


<br><br>


# Operadores de Asignación Compuesta

Combinan una operación aritmética y la asignación en un solo paso,
evitando repetir el nombre de la variable.

```js
// Sin operador compuesto    // Con operador compuesto
num = num + 2                num += 2
```

---

### Operadores principales

```js
let n = 10;

n += 5;   // n = 10 + 5  → 15
n -= 7;   // n = 15 - 7  → 8  (si n fuera 20 → 13)
n *= 3;   // n = n * 3
n /= 4;   // n = n / 4
n %= 3;   // n = n % 3   — asigna el residuo
n **= 2;  // n = n ** 2  — asigna la potencia
```

---

### Tabla completa

| Operador | Equivale a | Descripción |
|---|---|---|
| `+=` | `x = x + y` | Suma y asigna |
| `-=` | `x = x - y` | Resta y asigna |
| `*=` | `x = x * y` | Multiplica y asigna |
| `/=` | `x = x / y` | Divide y asigna |
| `%=` | `x = x % y` | Residuo y asigna |
| `**=` | `x = x ** y` | Potencia y asigna |
| `&=` | `x = x & y` | AND bit a bit y asigna |
| `\|=` | `x = x \| y` | OR bit a bit y asigna |

> Existe un operador de asignación compuesta para **cada** operador en JavaScript.