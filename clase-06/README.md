### Diseño y Nuevos Medios → Clase 06 → 13/09/2023

# HTML5 + CSS3 + JS sin bibliotecas

### Teoría

Ya avanzada la segunda década del 2000, cuando casi no se habla de sitios sino aplicaciones web, podría ser necesario exigir a las bibliotecas de JavaScript algo más que simplificarnos la tarea de manipular el DOM y hacer transiciones animadas. 

Tanto corresponde exigirles que, a veces, el concepto de biblioteca (*library*) queda chico, y se cambia por marco de trabajo (*framework*).

Hay 3 frameworks de JavaScript importantes en la actualidad:

- React → https://es.reactjs.org/

- Angular → https://angular.io/

- Vue.js → https://vuejs.org/

El primero es de Meta (Facebook). El segundo es mantenido por Google. El tercero tiene cierta independencia y ofrece una alternativa progresiva: No debes transformar todo tu código fuente a su particular redacción, puedes ir adoptándolo de a poco. Pero su objetivo, ya en lo más básico, apunta al "montaje" de aplicaciones:

```
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
        <title>Ejemplo</title>
    </head>
    <body>
        <div id="app">{{ message }}</div>
        <script>
            const { createApp, ref } = Vue
            createApp({
                setup() {
                    const message = ref('¡Hola Vue.js!')
                    return {
                        message
                    }
                }
            }).mount('#app')
        </script>
    </body>
</html>
```

En el código tenemos una estructura reconocible: Es una página de `.html`. Incluye algo extraño: `{{ message }}`, que en su carga es reemplazado por un `¡Hola Vue.js!`, que es un mensaje creado como si se tratara de una aplicación (`createApp`). 

Es muy recomendable acceder a los *frameworks* más adelante, después de dominar el JavaScript más estándar. 

#### Fetch

Pero mejor quedémonos en los estándares…

Utilizaremos una API (Application Programming Interfaces) que conviene estudiar previo a la clase para poder resolver de manera más eficiente las consultas de la práctica: https://openweathermap.org/current

**Pero esta vez no lo iremos a buscar con p5.js ni jquery; ya nos corresponde avanzar al [uso de Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)**.

Para aprender lo necesario respecto del uso de Fetch, es recomedable tomarse 47 minutos para ver tres videos de Daniel Shifmann:

- https://youtu.be/tc8DU14qX6I
- https://youtu.be/RfMkdvN-23o
- https://youtu.be/uxf0--uiX0I

Una vez sean obtenidos los datos mediante el [uso de Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch), podemos estructurarlos  a la manera que convenga al [tipo de gráfico](https://www.chartjs.org/docs/latest/charts/?h=type).

```
async function primero() {
    const consulta = await fetch("https://raw.githubusercontent.com/profesorfaco/dno037-2023-1/main/clase-06/datos.json");
    const data = await consulta.json();
    console.log(data);
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
