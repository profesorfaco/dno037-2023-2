### Diseño y Nuevos Medios → Clase 01 → 09/08/2023

# HTML5 + CSS3 + p5.js

### Teoría (para la casa)

Escribir "código fuente" implica describir y/o programar. 

Para reconocer los lenguajes de descripción y programación que son claves para el desarollo de sitios web profesionales o prototipos avanzados de aplicaciones web, trabajaremos con un editor de código fuente ([Sublime Text](https://www.sublimetext.com/) o [Phoenix Code Editor](https://phcode.dev/)).

El editor de código fuente nos darán indicaciones para poder describir y/o programar respuesta a las siguientes preguntas, cada una con un lenguaje distinto:

- **¿Qué es lo que contiene la página? Se responde con HTML (HyperText Markup Language)**. Lenguaje estándar que describe la estructura de las páginas web. HTML5 es la versión más reciente de este lenguaje. El bloque constructivo más básico del HTML es el elemento. Cada elemento de HTML se escribe, generalmente, entre etiquetas: `<etiqueta>contenido</etiqueta>` → Podemos complementar esta breve introducción a HTML con una revisión de la página: https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics

- **¿Cómo se muestra lo que contiene la página? Se responde con CSS (Cascading Style Sheets)**. Lenguaje estándar que describe la presentación de las páginas web. CSS3 es la versión más reciente de este lenguaje. Su unidad más básica es la regla. Cada regla se inicia con un selector, seguido de paréntesis de llave `{…}`. Tal paréntesis contiene un bloque de declaraciones. En tal bloque, cada declaración se separa de otra mediante punto y coma `;`. Una declaración se compone del par `propiedad: valor`. Con todo lo dicho, una regla se escribirá, generalmente, de la siguiente manera: `selector{ propiedad: valor; }`  →  Podemos complementar esta breve introducción a CSS con una revisión de la página: https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/CSS_basics (no es necesario realizar el ejercicio que allí se propone).

- **¿Qué hace la página? Se responde con JS (JavaScript)**. Lenguaje de programación que controla el comportamiento de las páginas web. Con JS se pueden escribir secuencias de instrucciones con las que una computadora realizará una tarea determinada. Su estructura puede variar dependiendo de la lógica de cada instrucción, la [versión](https://www.w3schools.com/js/js_versions.asp) en uso, la *library* en la que nos apoyemos para resolver algo específico, o el *framework* de programación con el que se levanta todo el trabajo → Podemos complementar esta breve introducción a JS con una revisión de la página: https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript

Los lenguajes de descripción pueden dominarse en un menor tiempo que los lenguajes de programación. 

HTML puede dominarse tan pronto se memorizan [los elementos HTML](https://developer.mozilla.org/es/docs/Web/HTML/Element) y sus [atributos](https://developer.mozilla.org/es/docs/Web/HTML/Attributes); CSS podría exigir algo más que HTML, porque implica memorizar propiedades, valores y sus unidades, además de [los selectores](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors) (para seleccionar elementos del HTML por tipo, atributo, identidad, clase, pseudoclase y un largo etcétera). 

Pero JavaScript, y la programación en general, puede tomarnos mucho más tiempo; una cosa es describir qué mostrar y cómo mostrarlo, y otra es estructurar instrucciones ajustadas a circunstancias y objetivos:

![meme](https://user-images.githubusercontent.com/7999767/156002975-2dfbf580-f6e2-4bd8-8e40-7110457a4cb4.png)

- - - - - - - - - - - - - - 

### Práctica (para la clase)

**Para la práctica de cada clase son necesarios algunos materiales**:

- una cuenta personal en [GitHub](https://github.com/join), y

- un computador con conexión a Internet, editor de código fuente ([Sublime Text](https://www.sublimetext.com/) o [Phoenix Code Editor](https://phcode.dev/)), y navegador web ([Chrome](https://www.google.com/intl/es-419/chrome/) o [Firefox](https://www.mozilla.org/es-CL/firefox/new/); **NO utilizaremos Safari**).

Es muy necesario que desactive los traductores en su navegador web, porque la traducción automática (y forzada) al español puede complicar un trabajo que se hace, principalmente, en inglés. También es necesario que sepa como "Ver el código fuente de la página", [inspeccionar elementos](https://support.hostinger.es/es/articles/2333029-como-inspeccionar-los-elementos-del-sitio-web) y [abrir consola](https://transferwise.com/es/help/articles/2954851/como-abrir-la-consola-de-tu-navegador)

**En la práctica, que se resuelve presencialmente en sala**, cada estudiante puede presentar sus dudas de inmediato al profesor. Evite presentarlas a compañer@s, así no les quita la posibilidad de concentrarse ni cae en "el juego del teléfono" o la trampa del "según yo…": Nada se resuelve según lo que se sospeche, todo se resuelve según las normas sintácticas y semánticas de los lenguajes que comienza a conocer.

Para comenzar a conocer las normas de los lenguajes mencionados más arriba (HTML, CSS y JavaScript), podemos aprovechar los documentos contenidos en esta carpeta, que puede descargarse como un ZIP: https://github.com/profesorfaco/dno037-2023-2/blob/main/clase-01/clase-01.zip

Una vez tengan la carpeta "des-zipeada" en su computador, y ya abierta en su editor de código fuente, es posible asomarnos al código fuente de `index.html`, donde encontraremos la estructura típica de toda página HTML: 

```
<!DOCTYPE html>
<html lang="es">
    <head>…</head>
    <body>…</body>
</html>
```

Dentro de la cabeza (`<head></head>`), podemos ver un **link** cuya **ref**erencia es un `style.css` que se **rel**aciona con la página como una **stylesheet**.

En el `style.css` podemos leer la estructura típica de toda hoja de estilo CSS, donde encontramos una serie de reglas con la misma estructura de un selector antes de unos paréntesis de llave que contienen declaraciones separadas por punto y coma:  `* { margin: 0; padding: 0; }`

Si volvemos al código fuente de `index.html`, y nos fijamos en el `<body>…</body>`, nos encontraremos los siguientes elementos: 

- [`<main></main>`](https://developer.mozilla.org/es/docs/Web/HTML/Element/main); 

- [`<div></div>`](https://developer.mozilla.org/es/docs/Web/HTML/Element/div); 

- [`<script></script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script); y 

- [`<script></script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

Si, dos `<script></script>`. El primero va a buscar un *script*, y el segundo abre un espacio para un *script*.

Revisando lo contenido en el segundo `<script></script>`, podemos ver una [variable de JavaScript](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Variables#%C2%BFqu%C3%A9_es_una_variable); esta variable se llama `palabras` y contiene un arreglo con 8 cadenas de caracteres entre comillas. 

```
var palabras = ["siguiente", "repüyen", "seguente", "suivant", "next", "Nächster", "次の", "다음의"];
```

Cada cadena de caracteres, contenida entre comillas, tiene una posición dentro del arreglo. Las posiciones se identifican con un número, partiendo a la izquierda con el 0. Considerando lo recién dicho, `palabras[0]` refiere a `siguiente` y `palabras[7]` refiere a `다음의` 

El contenido de la variable se aprovecha para programar algo sencillo, con la ayuda de [p5.js](https://p5js.org/es/get-started/): una bibliteca de JS que reinterpreta Processing para la Web (la que fuimos a buscar con el primer `<script></script>`).

Para continuar reconociendo los lenguajes mencionados más arriba, y seguir aprovechando los documentos contenidos en esta carpeta, pasemos a `page.html`, donde tenemos un contenido distintos en el segundo `<script></script>`.

#### Importante

La práctica se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch), su versión ajustada del sitio web contenido en esta carpeta de repositorio.

La dirección de su página debe ser ingresada en el foro correspondiente a la clase: URL pendiente.

Lo publicado en GitHub Pages e ingresado en el foro, será evaluado como:

- **0.00** → no logrado.

- **0.75** → medianamente logrado.

- **1.00** → logrado.

- **1.50** → completamente logrado.

El puntaje que se obtenga será considerado en la Evaluación Nº1, de la [clase-03](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-03).

- - - - - - - 

###### [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-02)
