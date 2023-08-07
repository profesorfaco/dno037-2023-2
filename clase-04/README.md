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

En [las referencias de p5.js](https://p5js.org/es/reference/#/p5/preload), esta función se describe así:

> La función `preload()` es ejecutada antes de `setup()`, es usada para manejar la carga asíncrona de archivos externos. Si se define una función `preload()`, `setup()` esperará hasta que las llamadas a funciones load hayan terminado. Solo se deben incluir instrucciones de carga dentro de `preload()` (`loadImage`, `loadJSON`, `loadFont`, `loadStrings`, etc).


Si aprovechamos [`loadJSON()`](https://p5js.org/es/reference/#/p5/loadJSON), podemos obtener [datos de un JSON](https://raw.githubusercontent.com/profesorfaco/dno037-2023-1/main/clase-02/regiones.json) que tenga, por ejemplo, la siguiente estructura:

```
[{
	"emoji": "🌭",
	"nombre": "completo"
}, {
	"emoji": "🌮",
	"nombre": "taco"
}, {
	"emoji": "🌯",
	"nombre": "shawarma"
}, {
	"emoji": "🍟",
	"nombre": "papitas"
}]
```

Si analizamos este [JSON](https://www.json.org/json-es.html) como notación de JavaScript (razón de su nombre, iniciales de JavaScript Object Notation), notaremos que todo es contenido por un paréntesis cuadrado, por lo que se trata de un arreglo. Los elementos de este arreglo, que están separados por comas, son contenidos por paréntesis de llave, por lo que cada uno de los 16 elementos en este arreglo es un objeto. En cada objeto vemos dos pares de nombre: dato.

Tal estructura del JSON implica una forma de consultarlo. Si fuera otra la estructura, otra sería la forma de consultarlo:

- Si quiero un dato de un arreglo: Lo llamo por su ubicación numerada, que parte en 0.

- Si quiere un dato de un objeto: Lo llamo por su nombre. 

Si quiero un 🌭, tendría que programar una consulta al objeto en la posición 0 del arreglo, donde puedo tomar lo que tiene nombre emoji.

¡Al principio parece engorroso! Pero así es todo la primera vez que lo enfrentamos.

Lo que pasa es que pronto se nos olvidan los primeros enfrentamientos con lo que supusimos engorroso: Con la práctica, la complejidad de cualquier cosa se *in-corpora* hasta no complicarnos más:

> I distinguish between *complexity* and *complicated*. I use the world "complexity" to describe the state of the world. The word "complicated" describes a state of mind. —Donald A. Norman

- - - - - - - - - - - - -

#### Práctica

La práctica se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch), su versión ajustada del sitio web contenido en esta carpeta de repositorio.

La dirección de su página debe ser ingresada en el foro correspondiente a la clase: URL pendiente.

Lo publicado en GitHub Pages e ingresado en el foro, será evaluado como:

- **0.00** → no logrado.

- **0.50** → medianamente logrado.

- **0.75** → logrado.

- **1.00** → completamente logrado.

El puntaje que se obtenga será considerado en la Evaluación Nº2, de la [clase-08](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-08).

- - - - - - - 

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-03) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-05)
