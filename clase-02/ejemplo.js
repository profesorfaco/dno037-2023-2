// Un par de variables en las que guardo el momento en que se carga la página (Date)
var laHora = new Date().getHours();
var losMinutos = new Date().getMinutes();
// Pongo el contenido de las variables en el span con identidad hora
document.querySelector("#hora").innerHTML = laHora + ":" + losMinutos;

// Creo otra variable
var elSaludo;
// Según la hora, guardo una u otra cosa en la variable recién creada
if (5 < laHora && laHora < 12) {
    elSaludo = "¡Buenos días! ";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "¡Buenas tardes! ";
} else {
    elSaludo = "¡Buenas noches! ";
}
// Pongo el contenido de la variable en el span con identidad saludo
document.querySelector("#saludo").innerHTML = elSaludo;

// Creo otra variable más
var data;
// Guardo en la variable recién creada lo que me entregue una API
function preload() {
    data = loadJSON("https://taylorswiftapi.onrender.com/get");
}
// En esta ocasión no necesito un canvas, pero sí necesito un párrafo
function setup() {
    noCanvas();
    createP(data.quote + "<span> —Taylor Swift</span>").parent("texto");
}