### Diseño y Nuevos Medios → Clase 07 → 20/09/2023

# HTML5 + CSS3 + JS sin bibliotecas

### Teoría

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

También podemos tomar los datos de [un GeoJSON](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson) y contarlos bajo ciertas condiciones, para luego visualizar los números que resulten del conteo, como se hace en el script-2.js en la carpeta de la clase de hoy:

```
async function segundo() {
    const consulta = await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson");
    const data = await consulta.json();
    //Declaro variables que parten en cero
    let chileno = 0;
    let japones = 0;
    let otro = 0;
    //Reviso data con alguna condiciones
    data.features.forEach((t) => {
        if (t.properties.place.includes("Chile")) {
            chileno = chileno + 1;
        } else if (t.properties.place.includes("Japan")) {
            japones = japones + 1;
        } else {
            otro = otro + 1;
        }
    });
    //Creo una variable como un arreglo vacío
    var numeros = [];
    //Empujo a la variable los resultados del contador
    numeros.push(chileno, japones, otro);
    var nombres = ["En Chile", "En Japón", "En el resto del mundo"];
    //Ahora puedo armar el gráfico
    new Chart(document.getElementById("earthquakes").getContext("2d"), {···});
}
segundo().catch((error) => console.error(error));
```

**Hasta aquí hemos tomado datos desde un JSON (JavaScript Objecto Notation). En el primer ejemplo de código tomamos los números desde las mismas opciones de datos ofrecidos y en los otros ejemplos creamos números contando los datos ofrecidos**.

**Pero JSON no es la única forma de intercambiar datos. También podemos usar CSV (Comma Separated Values), que no es más que una tabla de datos muy simplificada.** 

Podemos poner lo que sigue en un *spreadsheet* de Excel o Google Docs.

| País      |  Población       | Superficie     |
|:----------|:-----------------|:---------------|
| Chile     | 18261884         | 756102         |
| Colombia  | 50880000         | 1142000        |
| España    | 47350000         | 505990         |

Luego podemos guardarlo o descargarlo como un CSV y obtener algo como lo que sigue:

```
País,Población,Superficie
Chile,18261884,756102
Colombia,50880000,1142000
España,47350000,505990
```

¡Lo que se obtiene es CSV!

Usando CSV, el Ministerio de Ciencia ofrece datos actualizados sobre el COVID-19 en Chile: https://github.com/MinCiencia/Datos-COVID19/blob/master/output/producto5/TotalesNacionales.csv

Allí sólo hay 22 filas, pero tantas columnas como días han pasado desde el 2 de marzo de 2020. Dicho de otro modo, tal CSV tiene sólo 22 líneas, pero más de mil comas por línea.

En un repositorio de GitHub un CSV (bien escrito) se muestra en tablas, pero en *raw* se ve así: https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto5/TotalesNacionales.csv

El CSV en *raw* es el que tenemos que usar para hacer el `fetch()`. Así se muestra en el `script-3.js` preparado para la clase:

```
async function tercero() {
    const consulta = await fetch("https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto5/TotalesNacionales.csv");
    const data = await consulta.text();
    const filas = data.split("\n");
    const fechas = filas[0].split(",").slice(1);
    const activos = filas[5].split(",").slice(1);
    //Ahora puedo armar el gráfico
    new Chart(document.querySelector("#covid").getContext("2d"), {···});
}
tercero().catch((error) => console.error(error));
```

Noten la diferencia en la línea que sigue al fetch, esa que traspasa `consulta` a `data`. Ese traspaso ya no se trata como `json()` sino un `txt()`. Ahora, como se trata de un TXT, tenemos que usar varias veces el [método split()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split) para explicarle cómo tratar a ciertos caracteres.

Parte de lo recién presentado queda mejor explicado en [el segundo de los videos de Daniel Shiffman](https://youtu.be/RfMkdvN-23o?t=172) enlistados más arriba.



- - - - - - - - - 

### Práctica

Para hacer su versión de [esta Web App ya preparada](https://profesorfaco.github.io/dno037-2023-1/clase-05), es necesario:

- revisar el [método `querySelector`](https://developer.mozilla.org/es/docs/Web/API/Element/querySelector);

- crear un usuario en [OpenWeather](https://home.openweathermap.org/users/sign_in) y activar su propia API Key.

- descargar lo contenido en [la carpeta de esta clase y personalizarlo](https://profesorfaco.github.io/dno037-2023-1/clase-07).

Personalizarlo implicar decidir tres ciudades distintas y trabajar, en conjunto, en la creación de algunas alternativas de [Weather icons](https://openweathermap.org/weather-conditions) con imágenes en formato [SVG](https://developer.mozilla.org/es/docs/Web/SVG/Tutorial/Introduction) como las de https://icons8.com/icon/pack/weather/dusk

La práctica se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch), su versión ajustada del sitio web contenido en esta carpeta de repositorio.

La dirección de su página debe ser ingresada en el foro correspondiente a la clase: URL pendiente.

Lo publicado en GitHub Pages e ingresado en el foro, será evaluado como:

- **0.00** → no logrado.

- **0.50** → medianamente logrado.

- **0.75** → logrado.

- **1.00** → completamente logrado.

El puntaje que se obtenga será considerado en la Evaluación Nº2, de la [clase-08](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-08).

- - - - - - -

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-06) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-08)
