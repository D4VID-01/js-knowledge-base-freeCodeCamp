# JavaScript, HTML y CSS

### Roles en el desarrollo web

Las tres tecnologías web fundamentales tienen responsabilidades distintas y complementarias:

- **HTML** → Estructura y contenido (elementos, etiquetas)
- **CSS** → Estilos y presentación visual
- **JavaScript** → Funcionalidad, interactividad y comportamiento dinámico

> HTML y CSS son **lenguajes de marcado**; JavaScript es un **lenguaje de programación**.

### Cómo trabajan juntos

JavaScript no reemplaza ni compite con HTML/CSS. Los tres coexisten y se complementan:
interactúa con la página para **modificar contenido y estilos de forma dinámica** en respuesta
a acciones del usuario (clics, envío de formularios, hover, etc.).

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    h1 { color: green; }   <!-- CSS: estilo -->
  </style>
</head>
<body>
  <h1>Hello, World!</h1>                               <!-- HTML: estructura -->
  <button onclick="alert('Button clicked!')">Click me  <!-- JS: comportamiento -->
  </button>
</body>
</html>
```

### Puntos clave

- JavaScript **no** es solo para animaciones; maneja cualquier lógica interactiva del front-end.
- JavaScript **no** opera únicamente en back-end; es esencial en el front-end.
- JavaScript **no** genera una versión nueva de HTML ni añade estilos estáticos al CSS;
  los modifica en tiempo de ejecución según eventos.


<br><br>


# Tipos de Datos en JavaScript

Un **tipo de dato** define qué clase de valor almacena una variable.
Una **variable** es un contenedor nombrado que referencia ese valor a lo largo del código.


### Tipos primitivos básicos

| Tipo | Descripción | Ejemplo |
|---|---|---|
| **Number** | Enteros y decimales (punto flotante) | `42`, `3.14`, `-67` |
| **String** | Texto entre comillas simples o dobles | `"Hello!"`, `'Hello!'` |
| **Boolean** | Solo `true` o `false` | `true`, `false` |
| **Undefined** | Variable declarada sin valor asignado | `let x;` → `undefined` |
| **Null** | Ausencia de valor asignada intencionalmente | `let x = null;` |

```js
console.log(42);        // Number - entero
console.log(3.14);      // Number - punto flotante
console.log("Hello!");  // String
console.log(true);      // Boolean
let x;
console.log(x);         // undefined
let y = null;
console.log(y);         // null
```

---

### Tipos complejos

```js
// Object: colección de pares clave-valor
{ name: "Alice", age: 30 }

// Symbol: identificador único e inmutable
Symbol('mySymbol')

// BigInt: números que exceden el límite de Number
1234567890123456789012345678901234567890n
```

> `Symbol` y `BigInt` son menos frecuentes pero válidos en JavaScript.

---

### Notas clave

- `console.log()` muestra valores en la consola del navegador (útil para depurar).
- `//` define comentarios; el motor de JS los ignora al ejecutar.
- Cada tipo tiene características propias que determinan cómo se manipula en el programa.


<br><br>


# Variables en JavaScript

Una **variable** es un contenedor nombrado para almacenar datos accesibles y modificables
a lo largo del programa. Se declara con la palabra clave `let`.


### Declaración, asignación y reasignación

```js
let age;           // Declaración sin valor → undefined
let age = 25;      // Declaración + inicialización (operador de asignación =)

age = 30;          // Reasignación (no repite let)
console.log(age);  // 30
```

> `=` **no** verifica igualdad; solo asigna un valor. La reasignación permite
> actualizar el valor durante la ejecución (ej. puntaje en un juego).

---

### Reglas para nombrar variables

| Regla | Válido | Inválido |
|---|---|---|
| Empieza con letra, `_` o `$` | `_score`, `$total`, `age` | `1stPlace` |
| Sin caracteres especiales | `player1Score` | `total-score!` |
| No usar palabras reservadas | `playerName` | `let`, `const`, `return` |
| Case-sensitive | `age` ≠ `Age` | — |

```js
// Nombres descriptivos con camelCase (convención estándar)
let playerScore;
let freeCodeCampStudents;

// Malos nombres (evitar)
let x = 10;
let y = "John";
```

---

### Puntos clave

- Usar `let` cuando el valor de la variable **cambiará** en el futuro.
- Los nombres descriptivos hacen el código **más legible y fácil de mantener**,
  no afectan el rendimiento ni son exigidos por JavaScript.
- **camelCase** es la convención recomendada: primera palabra en minúsculas,
  siguientes palabras con mayúscula inicial.


<br><br>


# `let` vs `const` en JavaScript

Ambas son las formas **modernas y preferidas** de declarar variables, pero difieren
en flexibilidad.


### Comparativa rápida

| | `let` | `const` |
|---|---|---|
| Reasignación | ✅ Permitida | ❌ Lanza error |
| Declaración sin valor | ✅ → `undefined` | ❌ Lanza error |
| Debe inicializarse al declarar | No | **Sí, obligatorio** |

---

### `let` — contenedor flexible

```js
let score = 10;
score = 20;          // reasignación válida
console.log(score);  // 20

let age;             // declaración sin valor
age = 25;            // asignación posterior válida
```

Ideal cuando el valor **cambiará** durante la ejecución (ej. puntaje, contador).

---

### `const` — valor constante

```js
const maxScore = 100;  // debe inicializarse aquí
console.log(maxScore); // 100

maxScore = 200;        // ❌ Error: no se puede reasignar
const age;             // ❌ Error: falta inicializador
```

Ideal para valores que **no deben cambiar** (ej. configuraciones, límites fijos).

---

### ¿Y `var`?

Existe pero **ya no se recomienda**. Tiene un ámbito más amplio que `let` y `const`,
lo que puede causar problemas difíciles de rastrear.

---

### Regla práctica

> Usa `const` por defecto. Cambia a `let` solo si sabes que el valor necesitará actualizarse.