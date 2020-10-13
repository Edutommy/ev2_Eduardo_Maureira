import unshowmas from './modules/unshowmas.js'
import mario from './modules/mario.js'

var caja = document.getElementById("caja");

window.cargar = unshowmas.cargar;
window.cargar = mario.cargar;

document.getElementById("USM").addEventListener("click", () => {
    caja.innerHTML = unshowmas.data;
    unshowmas.cargar();
    });

document.getElementById("MB").addEventListener('click', () => {
    caja.innerHTML = mario.data;
    mario.cargar();
});