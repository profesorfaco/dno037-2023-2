### Diseño y Nuevos Medios → Clase 04 → 30/08/2023

# HTML5 + CSS3 + otras bibliotecas de JS

### Teoría (para la casa)

Antes de pasar a otras bibliotecas, y considerando la semana universitaria, echarles un último vistazo a p5.js, con especial énfasis al trabajo con datos (que luego nos será útil para trabajar con otras bibliotecas o sin bibliotecas de JavaScript).

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


Si aprovechamos [`loadJSON()`](https://p5js.org/es/reference/#/p5/loadJSON), podemos obtener datos de un JSON que tenga, por ejemplo, la siguiente estructura:

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

La validez de tal estructura puede ser confirmada con servicios tales como: 

- https://jsonlint.com/

- https://jsonchecker.com/

- https://codebeautify.org/jsonvalidator

Si analizamos tal [JSON](https://www.json.org/json-es.html) como notación de JavaScript (razón de su nombre, iniciales de JavaScript Object Notation), tenemos un arreglo (todo está contenido por paréntesis cuadrado). Los elementos de este arreglo, que están separados por comas, son contenidos por paréntesis de llave, por lo que cada uno de los 4 elementos en este arreglo es un objeto. En cada objeto vemos dos pares de nombre: dato.

Tal estructura del JSON implica una forma de consultarlo. Si fuera otra su estructura, otra sería la forma de consultarlo:

- Si quiero un dato de un arreglo: Lo llamo por su ubicación numerada, que parte en 0.

- Si quiere un dato de un objeto: Lo llamo por su nombre. 

Si quiero un 🌭, tendría que programar una consulta al objeto en la posición 0 del arreglo, donde puedo tomar lo que tiene nombre emoji.

¡Al principio parece engorroso! Pero así es todo la primera vez que lo enfrentamos.

Lo que pasa es que pronto se nos olvidan los primeros enfrentamientos con lo que supusimos engorroso: Con la práctica, la complejidad de cualquier cosa se *in-corpora* hasta no complicarnos más:

> I distinguish between *complexity* and *complicated*. I use the world "complexity" to describe the state of the world. The word "complicated" describes a state of mind. —Donald A. Norman

Y para practicar podemos cambiar el ejemplo por un JSON ya validado y puesto en línea, que pueden consultar directamente en la carpeta de esta clase:  

https://raw.githubusercontent.com/profesorfaco/dno037-2023-2/main/clase-04/emojis.json 

¡Noten la estructura de la URL! Hay un `https://raw.` al principio.

- - - - - - - - - - - - -

#### Práctica

Primero trabajaremos con el JSON preparado y publicado en la carpeta de esta clase.

Con tal JSON, que tomaremos con un [`loadJSON()`](https://p5js.org/es/reference/#/p5/loadJSON) de p5.js, nos asomaremos a:

- el [método `Object.values()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/values) 

- el [método `forEach()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

- la [sentencia `if…else`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else)

- el [método `includes()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

Luego, cada estudiante tendrá que preparar su propio JSON con emojis tomados desde https://www.w3schools.com/charsets/ref_emoji.asp - Por ejemplo, puede preparar un JSON con emojis de signos zodiacales de clases aire, agua, tierra o fuego. Validar su estructura y luego subirlo a GitHub para seguir practicando.

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
