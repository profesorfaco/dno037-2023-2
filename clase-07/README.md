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

Usando CSV, podemos aprender un poco del Titanic: https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv

```
async function titanic() {
    const consulta = await fetch("https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv");
    const data = await consulta.text();
    const filas = data.split("\n");
    const fechas = filas[0].split(",").slice(1);
    const activos = filas[5].split(",").slice(1);
    //Ahora puedo armar el gráfico
}
titanic().catch((error) => console.error(error));
```

Noten la diferencia en la línea que sigue al fetch, esa que traspasa `consulta` a `data`. Ese traspaso ya no se trata como `json()` sino un `txt()`. Ahora, como se trata de un TXT, tenemos que usar varias veces el [método split()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split) para explicarle cómo tratar a ciertos caracteres.

Parte de lo recién presentado queda mejor explicado en [el segundo de los videos de Daniel Shiffman](https://youtu.be/RfMkdvN-23o?t=172) enlistados más arriba.



- - - - - - - - - 

### Práctica

Pendiente.

Lo publicado en GitHub Pages e ingresado en el foro, será evaluado como:

- **0.00** → no logrado.

- **0.50** → medianamente logrado.

- **0.75** → logrado.

- **1.00** → completamente logrado.

El puntaje que se obtenga será considerado en la Evaluación Nº2, de la [clase-08](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-08).

- - - - - - -

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-06) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2023-2/tree/main/clase-08)
