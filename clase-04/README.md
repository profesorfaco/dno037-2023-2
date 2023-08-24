### Diseño y Nuevos Medios → Clase 04 → 30/08/2023

# HTML5 + CSS3 + otras bibliotecas de JS

### Teoría (para la casa)

Antes de pasar a otras bibliotecas, y considerando la semana universitaria, daremos un último vistazo a p5.js con especial atención al trabajo con datos (que luego nos será útil para trabajar con otras bibliotecas o sin bibliotecas de JavaScript).

Recordemos que para comenzar a comprender JavaScript, aprovechamos [p5.js](https://p5js.org/es/): una biblioteca de JavaScript que es una reinterpretación de [Processing](https://processing.org/) para la web. Por tal reinterpretación, lo más común es que tenemos dos funciones, una que se ejecuta una única vez y otra que se ejecuta una y otra vez. 

```
function setup(){
  //colocas acá lo que se ejecuta una única vez
}

function draw(){
 //colocas acá lo que necesitas dibujar una y otra vez
}
```

A estas funciones podemos agregarle una función previa:

```
function preload(){
  //cargas algo antes que se ejecute cualquier cosa
}

function setup(){
  //colocas acá lo que se ejecuta una única vez
}

function draw(){
  //colocas acá lo que necesitas dibujar una y otra vez
}
```

En [las referencias de p5.js](https://p5js.org/es/reference/#/p5/preload), esta función se describe así:

> La función `preload()` es ejecutada antes de `setup()`, es usada para manejar la carga asíncrona de archivos externos. Si se define una función `preload()`, `setup()` esperará hasta que las llamadas a funciones load hayan terminado. Solo se deben incluir instrucciones de carga dentro de `preload()` (`loadImage`, `loadJSON`, `loadFont`, `loadStrings`, etc).

Si aprovechamos [`loadJSON()`](https://p5js.org/es/reference/#/p5/loadJSON), podemos obtener [datos de un JSON](https://raw.githubusercontent.com/profesorfaco/dno037-2023-2/main/clase-04/ejemplo.json) que repita la misma estructura de objetos dentro de un arreglo:

```
[{
 "char": "😀",
 "dec": 128512,
 "hex": "1F600",
 "contented": true
}, {
 "char": "😁",
 "dec": 128513,
 "hex": "1F601",
 "contented": true
}, {
 "char": "😕",
 "dec": 128533,
 "hex": "1F615",
 "contented": false
}, {
 "char": "😞",
 "dec": 128542,
 "hex": "1F61E",
 "contented": false
}]
```

La validez de tal estructura puede ser confirmada con servicios tales como: https://jsonlint.com/ · https://jsonchecker.com/ · https://codebeautify.org/jsonvalidator

Cada estructura válida de un JSON implicará una forma particular de interactuar (pero recuerden un *issue* de p5.js: [*loadJSON always returns Object, never an Array #2154*](https://github.com/processing/p5.js/issues/2154#issuecomment-578892245))

En el caso de la [estructura del JSON del ejemplo](https://raw.githubusercontent.com/profesorfaco/dno037-2023-2/main/clase-04/ejemplo.json), tenemos un nombre `contented` al que se le asigna uno de dos valores [booleanos](https://es.wikipedia.org/wiki/Funci%C3%B3n_booleana) posibles: `true` o `false`.

Con las dos posibilidades podemos establecer una condición: Acaso el dato en `contented` es `true` o `false`. 

Para explorar esta posibilidad, puede revisarse el código fuente de https://profesorfaco.github.io/dno037-2023-2/clase-04/ejemplo.html

En la revisión conviene quedarse un rato en:

```
function emojiTrue() {
 datosArreglados.forEach(e => {
  if(e.contented == true){ text(e.char, random(0, windowWidth), random(0, windowHeight)) }
 });
}

function emojiFalse() {
 datosArreglados.forEach(e => {
  if(e.contented == false){ text(e.char, random(0, windowWidth), random(0, windowHeight)) }
 });
}
```

Allí tenemos dos funciones, cada una con su nombre. Y cada una nos permite:

- recordar el [método `forEach()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

- conocer la [sentencia `if…else`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else)

Lo que resultará de la ejecución de la `function emojiTrue()` será la impresión de tantos textos como emojis contentos contenga el JSON. Mientras que la ejecución de la `function emojiFalse()` imprimirá los emojis que no son contentos.

Ahora, con esa lógica de funciones y condiciones podríamos pasar a otro asunto y otra biblioteca. 

Hagamos de cuenta que una "máquina" ha "aprendido" a oir y reconocer las palabras: *zero*, *one*, *two*, *tree*, *four*, *five*, *six*, *seven*, *eight*, *nine*, *up*, *down*, *left*, *right*, *go*, *stop*, *yes* o *no*.

A este aprendizaje de máquina (la intención es referir al *machine learning*) se puede accederse de modo amigable y en web si usamos la **biblioteca ml5.js**

Se trata de una biblioteca de JavaScript que puede trabajar con p5.js: 

Acá algunos ejemplos del modo en que trabajan juntas, disponibles en el Editor Web de p5.js: 

- https://editor.p5js.org/ml5/sketches/SoundClassification_speechcommand

- https://editor.p5js.org/jernwerber/sketches/Uu4TPyYEu

Pendiente

- - - - - - - - - - - - -

#### Práctica

Pendiente.

La práctica se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch), su versión ajustada del sitio web contenido en esta carpeta de repositorio.

La dirección de su página debe ser ingresada en el foro correspondiente a la clase: URL pendiente.

Lo publicado en GitHub Pages e ingresado en el foro, será evaluado como:

- **0.00** → no logrado.

- **0.50** → medianamente logrado.

- **0.75** → logrado.

- **1.00** → completamente logrado.

Al tratarse de semana universitaria, en la que no se efectuarán evaluaciones: El puntaje que se obtenga será considerado como bonificación a la Evaluación Nº2, de la [clase-08](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-08).

- - - - - - - 

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-03) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-05)
