### Diseño y Nuevos Medios → Clase 06 → 13/09/2023

# HTML5 + CSS3 + JS sin bibliotecas

### Teoría

Ya avanzada la segunda década del 2000, cuando casi no se habla de sitios sino aplicaciones web, podría ser necesario exigir a las bibliotecas de JavaScript algo más que simplificarnos la tarea de manipular el DOM y hacer transiciones animadas. 

Tanto corresponde exigirles que, a veces, el concepto de biblioteca (*library*) queda chico, y se cambia por marco de trabajo (*framework*).

Hay 3 frameworks de JavaScript importantes en la actualidad:

- React → https://es.reactjs.org/

- Angular → https://angular.io/

- Vue.js → https://vuejs.org/

Vue.js es un Framework de JavaScript progresivo. No debes transformar todo tu código fuente a su particular redacción. Al contrario, puedes mantenerte muy cerca de los estándares de los lenguajes de descripción y programación para Web que vamos aprendiendo, y desde ahí aprovechar, progresivamente, lo que tal framework ofrece.

**Si fuera de su interés comenzar a explorar uno de estos *frameworks*, sería muy recomendable partir por acá: https://vuejs.org/tutorial/**

Pero mejor quedémonos en los estándares…

Utilizaremos una API (Application Programming Interfaces) que conviene estudiar previo a la clase para poder resolver de manera más eficiente las consultas de la práctica: https://openweathermap.org/current

Ahora, si necesitamos datos, podemos volver a aprovechar aquellos que ya se ofrecen en línea. 

**Pero en esta ocasión no estamos trabajando con p5.js, sólo con la biblioteca de Charts.js v3, por ello no contamos con [la función loadJSON](https://p5js.org/es/reference/#/p5/loadJSON); ya nos corresponde avanzar al [uso de Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)**.

**Para aprender lo necesario respecto del uso de Fetch, es recomedable tomarse 47 minutos para ver tres videos de Daniel Shifmann**:

- https://youtu.be/tc8DU14qX6I
- https://youtu.be/RfMkdvN-23o
- https://youtu.be/uxf0--uiX0I

Una vez sean obtenidos los datos mediante el [uso de Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch), podemos estructurarlos  a la manera que convenga al [tipo de gráfico](https://www.chartjs.org/docs/latest/charts/?h=type).

Podemos, por ejemplo, tomar datos de [un JSON](https://raw.githubusercontent.com/profesorfaco/dno037-2023-1/main/clase-06/datos.json) y luego organizarlos en función del gráfico, como se hace en el script-1.js en la carpeta de la clase de hoy: 

```
async function primero() {
    const consulta = await fetch("https://raw.githubusercontent.com/profesorfaco/dno037-2023-1/main/clase-06/datos.json");
    const data = await consulta.json();
    //Declaro variables que parten con un arreglo vacío
    let regiones = [];
    let hombres = [];
    let mujeres = [];
    //Reviso data y empujo un elemento a cada arreglo que estaba vacío
    data.forEach((x) => {
        regiones.push(x.region);
        hombres.push(x.hombres);
        mujeres.push(x.mujeres);
    });
    //Ahora puedo armar el gráfico
    new Chart(document.getElementById("regiones"), {···});
}
primero().catch((error) => console.error(error));
```

**Hasta aquí hemos tomado datos desde un JSON (JavaScript Objecto Notation). En el primer ejemplo de código tomamos los números desde las mismas opciones de datos ofrecidos y en los otros ejemplos creamos números contando los datos ofrecidos**.

- - - - - - -

### Práctica

Para hacer su versión de [esta Web App ya preparada](https://profesorfaco.github.io/dno037-2023-1/clase-05), es necesario:

- revisar el [método `querySelector`](https://developer.mozilla.org/es/docs/Web/API/Element/querySelector);

- crear un usuario en [OpenWeather](https://home.openweathermap.org/users/sign_in) y activar su propia API Key.

- descargar lo contenido en [la carpeta de esta clase y personalizarlo](https://profesorfaco.github.io/dno037-2023-1/clase-07).

Personalizarlo implicar decidir tres ciudades distintas y trabajar, en conjunto, en la creación de algunas alternativas de [Weather icons](https://openweathermap.org/weather-conditions) con imágenes en formato [SVG](https://developer.mozilla.org/es/docs/Web/SVG/Tutorial/Introduction) como las de https://icons8.com/icon/pack/weather/dusk

La práctica se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch), su versión ajustada del sitio web contenido en esta carpeta de repositorio.

La dirección de su página debe ser ingresada en el foro correspondiente a la clase: URL pendiente.

La práctica se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch), su versión ajustada del sitio web contenido en esta carpeta de repositorio.

La dirección de su página debe ser ingresada en el foro correspondiente a la clase: URL pendiente.

Lo publicado en GitHub Pages e ingresado en el foro, será evaluado como:

- **0.00** → no logrado.

- **0.50** → medianamente logrado.

- **0.75** → logrado.

- **1.00** → completamente logrado.

El puntaje que se obtenga será considerado en la Evaluación Nº2, de la [clase-08](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-08).
- - - - - - - - - - - -

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-05) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-07)
