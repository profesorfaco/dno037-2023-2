### Diseño y Nuevos Medios → Clase 04 → 30/08/2023

# HTML5 + CSS3 + otras bibliotecas de JS

### Teoría (para la casa)

Para comenzar a comprender JavaScript, aprovechamos [p5.js](https://p5js.org/es/): una biblioteca de JavaScript que es una reinterpretación de [Processing](https://processing.org/) para la web. Por tal reinterpretación, lo más común es que tenemos dos funciones, una que se ejecuta una única vez y otra que se ejecuta una y otra vez. 

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

En [las referencias de p5.js](https://p5js.org/es/reference/#/p5/preload) la función recién agregada se describe así:

> La función `preload()` es ejecutada antes de `setup()`, es usada para manejar la carga asíncrona de archivos externos. Si se define una función `preload()`, `setup()` esperará hasta que las llamadas a funciones load hayan terminado. Solo se deben incluir instrucciones de carga dentro de `preload()` (`loadImage`, `loadJSON`, `loadFont`, `loadStrings`, etc).

Si aprovechamos [`loadJSON()`](https://p5js.org/es/reference/#/p5/loadJSON), podemos cargar los [datos de un JSON](https://raw.githubusercontent.com/profesorfaco/dno037-2023-2/main/clase-04/ejemplo.json) con la siguiente estructura: Un arreglo (`[]`) que contiene varios objetos (`{}`); en cada objeto se repite cada `key:` y se cambia su `value,`

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

Cada estructura válida de un JSON implicará una forma particular de consultarlo (pero recuerden un *issue* de p5.js en la carga de un arreglo: [*loadJSON always returns Object, never an Array #2154*](https://github.com/processing/p5.js/issues/2154#issuecomment-578892245))

En el caso de la [estructura del JSON del ejemplo](https://raw.githubusercontent.com/profesorfaco/dno037-2023-2/main/clase-04/ejemplo.json), tenemos un `contented:` al que se le asigna uno de los [booleanos](https://es.wikipedia.org/wiki/Funci%C3%B3n_booleana) posibles: `true` o `false`.

A cada `contented:` le podemos preguntar: ¿Lo tuyo es `true` o `false`? 

Para explorar tal posibilidad, puede revisarse el código fuente de https://profesorfaco.github.io/dno037-2023-2/clase-04/ejemplo.html

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

Allí se hace necesario:

- ponerle atención a [las funciones](https://www.instagram.com/p/CrGGoktPfjl/?img_index=1)

- recordar el [método `forEach()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

- conocer la [sentencia `if…else`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else)

Después de eso, que aplica a todo en JavaScript, podríamos pasar a otra biblioteca.

#### ml5.js

Recordemos una escena de Matrix: [Cuando Trinity aprender a pilotar un helicóptero B-212 después de recibir un programa](https://youtu.be/6AOpomu9V6Q?si=aMsX5lEtYqG6WP_D). Partiendo de esa ficción, ahora hagamos de cuenta que le enseñamos a una "máquina" a asociar lo que escucha con alguna etiqueta (*label*), indicando un grado de confianza (*confidence*) para tal asociación. 

Podría ser que sus etiquetas (*labels*) sean limitadas. Que se limiten, por ejemplo, a las siguientes palabras en inglés: *zero*, *one*, *two*, *tree*, *four*, *five*, *six*, *seven*, *eight*, *nine*, *up*, *down*, *left*, *right*, *go*, *stop*, *yes* o *no*.

Con tal ejemplo en mente, revisemos este *sketch* preparado en el Editor Web de p5.js: https://editor.p5js.org/profesorfaco/sketches/qyl_CH5WA

Después de un *play*, aceptar que el navegador acceda al micrófono y darle un tiempo a que cargue un listado de palabras, podemos comenzar a decir tales palabras.

Eso es p5.js trabajando con **ml5.js, otra biblioteca de JavaScript**; ambas bibliotecas son compatibles desde sus intenciones, de hecho el [ml5.js Community Statement](https://ml5js.org/about) es un *copy/paste* del [p5.js community statement](https://p5js.org/community/). Esta compatibilidad explicaría el *5* después de *ml* de Machine Learning, pero:

> Developing [ml5](https://ml5js.org/about/) is not just about developing machine learning software, it is about making machine learning approachable for a broad audience of artists, creative coders, and students. The library provides access to machine learning algorithms and models in the browser, building on top of [TensorFlow.js](https://www.tensorflow.org/learn?hl=es-419) with no other external dependencies.

Para explorar esta biblioteca de JavaScript, así como cualquier otra biblioteca del mismo lenguaje de programación, corresponde consultar las referencias que, por lo general, se presentan en su sitio web oficial.

En el caso de las [referencia de ml5.js](https://learn.ml5js.org/#/reference/index), tenemos un presentación organizada en 5 categorías de funciones, basadas en los tipos de entrada y salida con los que se puede trabajar:

1 **Helpers**
- ml5.neuralNetwork()
- ml5.featureExtractor()
- ml5.KNNClassifier():
- ml5.kmeans()

2 **Image**
- ml5.imageClassifier()
- ml5.poseNet()
- ml5.bodyPix()
- ml5.uNet()
- ml5.handpose()
- ml5.facemesh()
- ml5.faceApi()
- ml5.styleTransfer()
- ml5.pix2pix()
- ml5.CVAE()
- ml5.DCGAN()
- ml5.sketchRNN()
- [ml5.objectDetector()](https://learn.ml5js.org/#/reference/object-detector)

3 **Sound**
- [ml5.soundClassifier()](https://learn.ml5js.org/#/reference/sound-classifier)
- ml5.pitchDetection()

4 **Text**
- ml5.charRNN()
- ml5.sentiment()
- ~~ml5.word2vec()~~ ([desactivada](https://twitter.com/ml5js/status/1445762321444315147))

5 **Utils**
- ml5.flipImage()

**En el listado se incluyen vínculos que permitirán comprender [el ejemplo que pudieron ver en el Editor Web de p5.js](https://learn.ml5js.org/#/reference/sound-classifier), lo que [será explorado en la práctica](https://learn.ml5js.org/#/reference/object-detector) y enterarse de un [problema](https://twitter.com/ml5js/status/1445762321444315147) con el que suelen enredarse estas tecnologías**.

Antes de seguir –antes de la práctica–, conveniente revisar: 

- Este video: [A Beginner's Guide to Machine Learning with ml5.js](https://www.youtube.com/watch?v=jmznx0Q1fP0)

- Este artículo: [El mal que aqueja a las IA es la abducción](https://hipermediaciones.com/2023/08/21/el-mal-que-aqueja-a-las-ia-es-la-abduccion/)

Viendo tal video y/o leyendo tal artículo podrían hacerse de una idea sobre el concepto de *machine learning* y comenzar a relacionarlo con varios más.

- - - - - - - - - - - - -

#### Práctica

Para la práctica será necesario tener a la mano algunas referencias:

- [reference | p5.js](https://p5js.org/es/reference/) 
- [ml5.js - ObjectDetector](https://learn.ml5js.org/#/reference/object-detector)
- [Lista de 80 objetos que podrían detectarse](https://github.com/ml5js/ml5-library/blob/main/src/utils/COCO_CLASSES.js)

Con tales referencias se podrá avanzar en la edición del [index.html](https://profesorfaco.github.io/dno037-2023-2/clase-04/) y [page.html](https://profesorfaco.github.io/dno037-2023-2/clase-04/page.html?esta=pic-01.jpg) contenidos en esta carpeta. 

Recuerda que necesitas descargar tales archivos y colocarlos en una misma carpeta, junto al [style.css](https://github.com/profesorfaco/dno037-2023-2/blob/main/clase-04/style.css).

También hay un [img.json](https://raw.githubusercontent.com/profesorfaco/dno037-2023-2/main/clase-04/img.json) y una carpeta `/img`. Para que cada estudiante pueda hacerse de sus propias imágenes, podría aprovechar:

- https://picsum.photos/images
- https://www.photopea.com/
- https://tinypng.com/

Convendría comenzar por crear un repositorio para la clase, allí subir imágenes dentro de una carpeta img, y también subir un img.json que apunte a lo contenido en tal carpeta.

La práctica se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch), su versión ajustada del sitio web, con nuevas imágenes.

La dirección de su página debe ser ingresada en el foro correspondiente a la clase: URL pendiente.

Lo publicado en GitHub Pages e ingresado en el foro, será evaluado como:

- **0.00** → no logrado.

- **0.50** → medianamente logrado.

- **0.75** → logrado.

- **1.00** → completamente logrado.

**Al tratarse de semana universitaria, en la que no se efectuarán evaluaciones: El puntaje que se obtenga será considerado como bonificación a la Evaluación Nº2, de la [clase-08](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-08)** o podría sumarse a la Evaluación Nº1, de la [clase-03](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-03), en caso ésta haya sido inferior a la nota 6.0.

En caso necesites volver a revisar parte de lo que haremos en la práctica, puedes ver en YouTube: [ml5.js: Object Detection with COCO-SSD](https://youtu.be/QEzRxnuaZCk?si=9VfMo2d2XWObEBeP); el script en `page.html` se basa, con pequeños ajustes, en lo que se enseña en tal video entre 00:00 y 11:39 (lo que sigue en el video sirve para avanzar en la exploración de [p5.js](https://p5js.org/es/) y [ml5.js](https://ml5js.org/)).

- - - - - - - 

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-03) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-05)
