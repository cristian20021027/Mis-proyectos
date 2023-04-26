function escribirTexto(texto, elemento, velocidad) {
if (!elemento) return;
if (!velocidad) velocidad = 100;

var indice = 0;
var temporizador = setInterval(function () {
    elemento.innerHTML += texto.charAt(indice);
    indice++;
    if (indice > texto.length - 1) {
    clearInterval(temporizador);
    }
}, velocidad);
}

window.onload = function () {
var texto = prompt("Hola, Escribe tu Nombre por favor:");
var elemento = document.getElementById("resultado");
escribirTexto(texto, elemento);
};

const fecha = document.getElementById("fecha");
const lista = document.getElementById("lista");
const input = document.getElementById("input");
const botonEnter = document.getElementById("boton-enter");

// funcicion de agregar tarea

function agregarTarea(tarea) {
const elemento = `
    <li id="elemeto">
    <i id="circulo" class="far fa-circle co" data="realizado"></i>
    <p class="text">${tarea}</p>
    <i class="fa-solid fa-trash" data="eliminado" id="0"></i>
    </li>`;

lista.insertAdjacentHTML("beforeend", elemento);
}

botonEnter.addEventListener("click", () => {
const tarea = input.value;
if (tarea) {
    agregarTarea(tarea);
}
input.value = "";
});
