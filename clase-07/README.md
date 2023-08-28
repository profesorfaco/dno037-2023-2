### Diseño y Nuevos Medios → Clase 07 → 20/09/2023

# HTML5 + CSS3 + JS sin bibliotecas

### Teoría

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
