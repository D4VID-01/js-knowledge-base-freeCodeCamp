# Operadores Unarios en JavaScript

Los operadores unarios actúan sobre **un solo operando** para conversión de tipo,
manipulación de valores o verificación de condiciones.

---

### `+` Unario — convierte a número

```js
const str = '42';
+str              // 42
typeof +str       // "number"
typeof str        // "string" — original intacta
```

### `-` Unario — convierte a número e invierte el signo

```js
const str = '42';
-str              // -42
typeof -str       // "number"
```

### `!` NOT lógico — invierte booleano

```js
!true   // false
!false  // true
```

### `~` NOT bitwise — invierte bits

Menos común; usado en programación de bajo nivel.
Resultado: `~n` equivale a `-(n + 1)`.

```js
~5   // -6  (invierte bits de 5 → complemento a dos)
```

### `void` — evalúa y devuelve `undefined`

```js
void (2 + 2)  // undefined
```

También usado en HTML para evitar navegación:
```html
<a href="javascript:void(0);">Click Me</a>
```

### `typeof` — devuelve el tipo como string

```js
typeof 'Hello'  // "string"
typeof 42       // "number"
typeof true     // "boolean"
```

---

### Resumen

| Operador | Acción |
|---|---|
| `+` | Convierte a número |
| `-` | Convierte a número y niega |
| `!` | Invierte booleano |
| `~` | Invierte bits |
| `void` | Devuelve `undefined` |
| `typeof` | Devuelve tipo como string |


<br><br>


# Operadores a Nivel de Bits (Bitwise)

Operan sobre las **representaciones binarias** de los números.
Un **bit** es la unidad mínima de información: solo `0` o `1`.

### Sistema binario — referencia rápida

| Decimal | Binario |
|---|---|
| 3 | `011` |
| 5 | `101` |
| 6 | `110` |
| 8 | `1000` |
| 10 | `1010` |

> Cada posición representa una potencia de 2 de derecha a izquierda.
> `1010` = 8+0+2+0 = **10**

---

### Operadores

#### `&` AND — bit 1 solo si **ambos** son 1
```js
5 & 3   // 101 & 011 = 001 → 1
```

#### `|` OR — bit 1 si **al menos uno** es 1
```js
5 | 3   // 101 | 011 = 111 → 7
```

#### `^` XOR — bit 1 si **uno pero no ambos** son 1
```js
5 ^ 3   // 101 ^ 011 = 110 → 6
```

#### `~` NOT — invierte todos los bits → `-(n+1)`
```js
~5      // → -6
```

#### `<<` Desplazamiento izquierda — multiplica por 2 por posición
```js
5 << 1  // 101 → 1010 → 10
8 << 2  // 1000 → 100000 → 32
```

#### `>>` Desplazamiento derecha — divide por 2 por posición (redondea abajo)
```js
5 >> 1  // 101 → 10 → 2
```

---

### Contexto de uso

Se usan principalmente en **programación de bajo nivel y criptografía**.
No son frecuentes en JavaScript del día a día, pero comprender cómo
funcionan profundiza el entendimiento de cómo opera una computadora.