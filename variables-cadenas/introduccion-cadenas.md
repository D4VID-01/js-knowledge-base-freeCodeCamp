# Strings en JavaScript

Una **cadena (string)** es una secuencia de caracteres usada para representar texto.
Es un tipo de dato primitivo junto con `number`, `boolean`, `null` y `undefined`.


### Sintaxis

```js
let singleQuotes = 'This is a string';
let doubleQuotes = "This is also a string";
```

Las comillas simples (`'`) y dobles (`"`) son equivalentes, pero **deben coincidir**:
abrir y cerrar con el mismo tipo. Mezclarlas lanza un error de sintaxis.

```js
const improperStr = "Do not do this';  // ❌ Error de sintaxis
```

---

### Inmutabilidad

Una cadena es **inmutable**: una vez creada, sus caracteres no pueden modificarse
directamente. Para "cambiarla", se asigna una **nueva cadena** a la variable.

```js
let developer = "Jessica";
developer = "Quincy";  // nueva cadena asignada, no modificación de la original
console.log(developer); // "Quincy"
```

> La variable puede apuntar a una nueva cadena, pero la cadena original en sí
> no fue alterada.


<br><br>


# Concatenación de Cadenas en JavaScript

**Concatenar** es unir fragmentos de texto. Hay tres formas principales de hacerlo.


### Operador `+` — concatenación simple

Une cadenas y variables en una sola expresión.

```js
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName); // "John Doe"
```

> ⚠️ Gestionar el espaciado manualmente es responsabilidad del programador.
> `firstName + lastName` produce `"JohnDoe"` sin espacio.

---

### Operador `+=` — anexar a una cadena existente

Construye una cadena agregando texto progresivamente.

```js
let greeting = "Hello";
greeting += ", John!";
console.log(greeting); // "Hello, John!"
```

> La cadena original `"Hello"` no se modifica (inmutabilidad).
> `greeting` apunta a la **nueva** cadena resultante.

---

### Método `concat()` — unir múltiples cadenas

Es un **método** (función asociada a un objeto) que une varias cadenas a la vez.

```js
let str1 = "Hello";
let str2 = "World";

let result = str1.concat(" ", str2);
console.log(result); // "Hello World"
```

---

### ¿Cuándo usar cada uno?

| Operador/Método | Mejor para |
|---|---|
| `+` | Concatenaciones simples y directas |
| `+=` | Construir una cadena paso a paso |
| `concat()` | Unir múltiples cadenas a la vez |


<br><br>


# `console.log()` en JavaScript

`console.log()` es un método que **muestra valores o mensajes en la consola del navegador**.
Su uso principal es **depurar e inspeccionar el código** durante el desarrollo.

### Usos básicos

```js
console.log("Hello, world!");   // texto literal

let num = 5;
console.log(num);               // valor de variable → 5

let name = "Alice";
console.log("Hello, " + name + "!"); // concatenación → Hello, Alice!
```

### Múltiples valores en una sola llamada

```js
let name = "Alice";
let age = 25;
console.log("Name:", name, "Age:", age); // Name: Alice Age: 25
```

Separar valores con comas permite registrar varias piezas de información a la vez.

---

### Puntos clave

- Muestra el **valor real** de una variable, no su nombre.
  `console.log(age)` → `10`, no `"age"`.
- **No** audita errores, no verifica rendimiento ni linting, no modifica el HTML.
- Es una herramienta de **desarrollo**: ayuda a entender cómo se comporta el programa
  mientras se ejecuta y a detectar errores fácilmente.