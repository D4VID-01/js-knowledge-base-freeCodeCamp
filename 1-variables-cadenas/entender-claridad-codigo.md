# Punto y Coma en JavaScript

El punto y coma (`;`) marca el **final de una sentencia**, permitiendo al motor de
JavaScript distinguir dónde termina una instrucción y comienza otra — análogo al
punto final en una oración.

```js
let a = 1;   // sentencia 1
let b = 2;   // sentencia 2
```

---

### Inserción Automática de Puntos y Comas (ASI)

JavaScript puede agregar puntos y comas automáticamente mediante **ASI**, pero este
comportamiento puede ser impredecible. Escribirlos explícitamente:

- Mejora la **legibilidad y mantenibilidad** del código.
- **Previene errores sutiles** causados por decisiones inesperadas de la ASI.
- Ayuda al motor a **parsear correctamente** las instrucciones.

> Omitir puntos y comas no siempre rompe el código, pero puede producir
> **comportamientos inesperados**.

---

### Contexto general

Los puntos y comas cumplen la misma función en otros lenguajes como C, C++ y Java,
donde el compilador los necesita para analizar y traducir el código correctamente.

> **Regla práctica:** usar siempre `;` al final de cada sentencia para escribir
> código más confiable y libre de ambigüedades.


<br><br>


# Comentarios en JavaScript

Los comentarios son texto **ignorado por el motor de JavaScript**; existen solo para
quienes leen el código. Sirven para proporcionar contexto, dejar notas y facilitar
el trabajo en equipo.


### Tipos de comentarios

#### Una sola línea — `//`
```js
// Explicación breve sobre lo que sigue
const curriculumLocale = 'english';
```

#### Varias líneas — `/* */`
```js
/* Explicación más extensa que requiere
   varias líneas para dar contexto completo
   sobre una sección del código. */
const price = 10;
```

---

### Buenas prácticas

✅ Usar comentarios para proporcionar **contexto no obvio** o razones de diseño.  
✅ Útiles en equipos: evitan cambios o eliminaciones accidentales de código crítico.  
❌ No comentar código **autoexplicativo**:

```js
// MAL: esto es obvio y no agrega valor
// Asignamos 10 a price
const price = 10;
```

❌ No usar comentarios para justificar código confuso o mal escrito —
la solución es **refactorizar** el código, no explicarlo.

---

### Resumen de sintaxis

| Tipo | Sintaxis | Uso |
|---|---|---|
| Línea única | `// texto` | Aclaraciones breves |
| Varias líneas | `/* texto */` | Descripciones detalladas |