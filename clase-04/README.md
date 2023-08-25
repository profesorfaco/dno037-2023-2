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

En el caso de la [estructura del JSON del ejemplo](https://raw.githubusercontent.com/profesorfaco/dno037-2023-2/main/clase-04/ejemplo.json), tenemos un `contented` al que se le asigna cada vez uno de dos valores [booleanos](https://es.wikipedia.org/wiki/Funci%C3%B3n_booleana) posibles: `true` o `false`.

Con las dos posibilidades podemos establecer una condición: Acaso el dato en `contented` es `true` o `false`. 

Para explorar esta posibilidad, puede revisarse el código fuente de https://profesorfaco.github.io/dno037-2023-2/clase-04/ejemplo.html

En la revisión conviene quedarse un rato en:

```
function emojis(cuales) {
  datosArreglados.forEach(e => {
    if(e.contented == cuales){
        text(e.char, random(0, windowWidth), random(0, windowHeight))
    }
  });
}
```

Allí tenemos algo que nos permite:

- ponerle atención a [las funciones](https://www.instagram.com/p/CrGGoktPfjl/?img_index=1)

- recordar el [método `forEach()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

- conocer la [sentencia `if…else`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else)

Con esa base sobre funciones, métodos y sentencias, que aplica a todo en JavaScript, podríamos pasar a otra biblioteca del mismo lenguaje de programación.

#### ml5.js

Hagamos de cuenta que "entrenamos a una máquina" hasta que "aprenda" a asociar lo que escucha con alguna etiqueta (*label*), indicando un grado de confianza (*confidence*) para tal asociación. 

Podría ser que sus etiquetas (*labels*) sean limitadas. Que se limiten, por ejemplo, a las siguientes palabras en inglés: *zero*, *one*, *two*, *tree*, *four*, *five*, *six*, *seven*, *eight*, *nine*, *up*, *down*, *left*, *right*, *go*, *stop*, *yes* o *no*.

Con tal ejemplo en mente, revisemos este sketch preparado en el Editor Web de p5.js: https://editor.p5js.org/profesorfaco/sketches/qyl_CH5WA

Después de un *play*, aceptar que el navegador acceda al micrófono y darle un tiempo a que cargue un listado de palabras, podemos comenzar a decir tales palabras.

Eso es p5.js trabajando con **ml5.js**, otra biblioteca de JavaScript. Esta biblioteca comparte con p5.js la intención de hacer accesible asuntos avanzados de programación (de ahí el *5*, después de la *m* de *machine* y la *l* de *learning*):

> [ml5.js](https://ml5js.org/) aims to make machine learning approachable for a broad audience of artists, creative coders, and students. The library provides access to machine learning algorithms and models in the browser, building on top of TensorFlow.js with no other external dependencies.

Antes de seguir, es conveniente revisar: 

- Este video: [A Beginner's Guide to Machine Learning with ml5.js](https://www.youtube.com/watch?v=jmznx0Q1fP0)

- Este artículo: [El mal que aqueja a las IA es la abducción](https://hipermediaciones.com/2023/08/21/el-mal-que-aqueja-a-las-ia-es-la-abduccion/)

Viendo tal video y/o leyendo tal artículo podrían hacerse de una idea sobre el concepto de *machine learning* y comenzar a relacionarlo con varios más.

- - - - - - - - - - - - -

#### Práctica

Para la práctica será necesario tener a la mano algunas referencias:

- [reference | p5.js](https://p5js.org/es/reference/) 
- [ml5.js - ObjectDetector](https://learn.ml5js.org/#/reference/object-detector)
- [Lista de 80 objetos que podrían detectarse](https://github.com/ml5js/ml5-library/blob/main/src/utils/COCO_CLASSES.js)

Con tales referencias se podrá avanzar en la edición del [index.html](https://profesorfaco.github.io/dno037-2023-2/clase-04/) y [page.html](https://profesorfaco.github.io/dno037-2023-2/clase-04/page.html?esta=pic-01.jpg) contenidos en esta carpeta. Recuerda que necesitas descargar tales archivos y colocarlos en una misma carpeta, junto al [style.css](https://github.com/profesorfaco/dno037-2023-2/blob/main/clase-04/style.css).

La práctica se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch), su versión ajustada del sitio web contenido en esta carpeta de repositorio.

La dirección de su página debe ser ingresada en el foro correspondiente a la clase: URL pendiente.

Lo publicado en GitHub Pages e ingresado en el foro, será evaluado como:

- **0.00** → no logrado.

- **0.50** → medianamente logrado.

- **0.75** → logrado.

- **1.00** → completamente logrado.

**Al tratarse de semana universitaria, en la que no se efectuarán evaluaciones: El puntaje que se obtenga será considerado como bonificación a la Evaluación Nº2, de la [clase-08](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-08)**.

En caso necesites volver a revisar parte de lo que haremos en la práctica, puedes ver en YouTube: [ml5.js: Object Detection with COCO-SSD](https://youtu.be/QEzRxnuaZCk?si=9VfMo2d2XWObEBeP); el script en `page.html` se basa, con pequeños ajustes, en lo que se enseña en tal video entre 00:00 y 11:39 (lo que sigue en el video sirve para avanzar en la exploración de [p5.js](https://p5js.org/es/) y [ml5.js](https://ml5js.org/)).

- - - - - - - 

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-03) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-05)
