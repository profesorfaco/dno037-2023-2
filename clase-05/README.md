### Diseño y Nuevos Medios → Clase 05 → 06/09/2023


# HTML5 + CSS3 + otras bibliotecas de JS

### Teoría

Existen [muchas bibliotecas de JavaScript](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries), además de [p5.js](https://p5js.org/es/). 

La [biblioteca de JavaScript](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries) que exploraremos hoy será [jQuery](https://jquery.com/) - *A fast, small, and feature-rich JavaScript library*.

**[jQuery](https://jquery.com/) es una biblioteca que nos simplifica la redacción de instrucciones en JavaScript, sobre todo cuando se busca manipular el DOM y hacer transiciones animadas**. Su primera versión estable fue lanzada el año 2006, lo que es anterior a la primera revisión importante del [estándar de JavaScript](https://en.wikipedia.org/wiki/ECMAScript), la [ES5 del 2009](https://www.w3schools.com/js/js_es5.asp), con la que se comenzó a simplificar la redacción del mismo lenguaje.

Conviene partir con un ejemplo: En una página web tenemos varios elementos con una clase a la que denominamos "media". Para afectar a todos los elementos que tienen esa clase con un cambio de color desde JavaScript, sin usar bibliotecas, hace algunos años habríamos escrito la siguiente instrucción:

```
var elementos = Array.from(document.getElementsByClassName("media"));
elementos.forEach(function(elemento){
  elemento.style.color="red";
});
```

Pero con el [estándar de JavaScript actual](https://www.w3schools.com/js/js_versions.asp) se simplifica un poco:

```
var elementos = document.querySelectorAll(".media");
elementos.forEach(elemento => elemento.style.color="red");
```

Ahora bien, usando [jQuery](https://jquery.com/), basta con escribir:

```
$(".media").css("color","red");
```

Para la primera década del 2000, [jQuery](https://jquery.com/) ofrecía una simplificación radical en el trabajo con JavaScript. Pero en los años más recientes el mismo lenguaje ha tendido a simplificarse o hacerse más moderno, como veremos líneas más abajo: ¡No conviene perder de vista esta tendencia por prestarle mucha atención a la biblioteca!

Hecha la advertencia, agreguemos un nivel más al ejemplo para poder entender el uso de la biblioteca: 

```
function enrojece() {
  $(".media").css("color","red");
}
$("#cambio").on("click", enrojece);
```

Tal instrucción está abreviando, mediante [jQuery](https://jquery.com/), lo siguiente:

```
function enrojece(){
  var elementos = document.querySelectorAll(".media");
  elementos.forEach(elemento => elemento.style.color="red");  
}
document.querySelector("#cambio").addEventListener("click", enrojece);
```

Con la última instrucción de jQuery, el cambio de color sobre todos los elementos de clase "media" se hace al presionar el botón de identidad "cambio". **Y ya resulta evidente que la clave del uso de [jQuery](https://jquery.com/) está en la concatenación de un selector y una acción: `$(selector).action()`** 

**Las opciones de selectores y acciones puede encontrarse en este *torpedo*: https://htmlcheatsheet.com/jquery/**

Tales selectores y acciones podrían verse tan breves como algunos métodos de JavaScript moderno; no es descabellado pensar que jQuery, que por años ha sido [la biblioteca de JavaScript más popular](https://kinsta.com/blog/javascript-libraries/#the-most-popular-javascript-libraries), haya inspirado más de alguna modificación reciente en JavaScript (en el lenguaje a secas):

> A partir del año 2015, se marcó un antes y un después en el mundo de Javascript, estableciendo una serie de cambios que lo transformarían en un lenguaje moderno ([Versiones de ECMAScript](https://lenguajejs.com/javascript/introduccion/ecmascript/#versiones-de-ecmascript))

Las versiones más recientes de este lenguaje modernizado son comprendidas por la mayoría de los navegadores. Pero no por todos los navegadores que siguen siendo usados. Por ejemplo: Hasta el año 2017 Internet Explorer no entendía a la [API Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API) (lo que revisamos la clase recién pasada), pero ya desde el año 2020 el jefe de seguridad de Microsoft, Chris Jackson, ha recomendado no usarlo más y cambiarse a Edge (otro navegador de Microsoft, que [ya pudo superar a Firefox, pero está lejos de alcanzar a Chrome](https://gs.statcounter.com/browser-market-share)).

Y con el ejemplo del párrafo anterior podríamos encontrarle sentido a seguir usando jQuery: Podría haber personas usando Internet Explorer en un computador que no se ha actualizado por años. En tal caso sería preferible usar un [`jQuery.getJSON()`](https://api.jquery.com/jQuery.getJSON/#jQuery-getJSON-url-data-success) o un [`jQuery.get()`](https://api.jquery.com/jquery.get/) antes que un [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch), como se hace en **este ejemplo**: 

**https://profesorfaco.github.io/dno037-2023-1/clase-07/ejemplo/**


- - - - - - -


### Práctica

La práctica estará enfocada en jQuery, por lo que conviene tener a la manos las opciones de selectores y acciones que son descritas detalladamente en https://api.jquery.com/, y de manera muy abreviada en https://htmlcheatsheet.com/jquery/

[Con jQuery prepararemos un portafolio](https://profesorfaco.github.io/dno037-2023-2/clase-05/). Su preparación servirá de adelanto a la evaluación Nº2.

La práctica se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch), su versión ajustada del sitio web contenido en esta carpeta de repositorio.

La dirección de su página debe ser ingresada en el foro correspondiente a la clase: URL pendiente.

Lo publicado en GitHub Pages e ingresado en el foro, será evaluado como:

- **0.00** → no logrado.

- **0.50** → medianamente logrado.

- **0.75** → logrado.

- **1.00** → completamente logrado.

El puntaje que se obtenga será considerado en la Evaluación Nº2, de la [clase-08](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-08).

- - - - - - - -

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-06) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-08)
