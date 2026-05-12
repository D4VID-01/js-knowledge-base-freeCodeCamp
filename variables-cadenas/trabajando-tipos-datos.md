# Tipado Dinámico en JavaScript

JavaScript es un lenguaje de **tipado dinámico**: el tipo de una variable se determina
por el valor asignado en tiempo de ejecución, no al declararla. Esto permite que una
variable cambie de tipo libremente.

```js
let example = "Hello";  // tipo: string
example = 42;           // tipo: number — sin error
```

---

### Dinámico vs. Estático

| | Tipado Dinámico (JS) | Tipado Estático (C#, C++, Java) |
|---|---|---|
| Declaración de tipo | No requerida | Obligatoria |
| Cambio de tipo | ✅ Permitido | ❌ Error |
| Flexibilidad | Alta | Baja |
| Seguridad de errores | Menor (errores en ejecución) | Mayor (errores en compilación) |

```csharp
// C# — tipado estático
int data = 42;
data = "Hello";  // ❌ Error en compilación
```

```js
// JavaScript — tipado dinámico
let data = 100;
data = "New data";  // ✅ Válido, cambia a string
```

---

### Implicaciones prácticas

- La flexibilidad del tipado dinámico hace a JavaScript rápido de escribir y
  conveniente para scripts pequeños.
- A medida que el programa crece, puede introducir **errores difíciles de detectar**
  en tiempo de ejecución, ya que el tipo no está garantizado.
- Los lenguajes estáticos previenen estos errores anticipadamente, pero exigen
  más declaración inicial.


<br><br>


# Operador `typeof` en JavaScript

`typeof` devuelve siempre una **cadena** que indica el tipo de dato de una variable o valor.
Es especialmente útil para depurar y verificar tipos en tiempo de ejecución.

```js
let num = 42;
console.log(typeof num);            // "number"

let text = "Hello";
console.log(typeof text);           // "string"

let isUserLoggedIn = true;
console.log(typeof isUserLoggedIn); // "boolean"
```

---

### El error de `typeof null`

```js
let exampleVariable = null;
console.log(typeof exampleVariable); // "object" ⚠️
```

`typeof null` devuelve `"object"` en lugar de `"null"` — esto es un **error histórico**
de JavaScript desde sus primeros días. Al diseñar el lenguaje, `null` fue representado
internamente como un tipo especial de objeto. Este comportamiento quedó incorporado
permanentemente en el lenguaje.

> No es comportamiento correcto: es una **particularidad conocida** de la que
> hay que estar consciente al trabajar con `null`.

---

### Referencia rápida

| Valor | `typeof` devuelve |
|---|---|
| `42` | `"number"` |
| `"Hello"` | `"string"` |
| `true` | `"boolean"` |
| `null` | `"object"` ⚠️ (error histórico) |
| `undefined` | `"undefined"` |
| `[1, 2, 3]` | `"object"` ⚠️ (usar `Array.isArray()` para verificar) |
| `{ name: "Alice" }` | `"object"` |