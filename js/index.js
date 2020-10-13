
import unshowmas from './modules/unshowmas.js'

var caja = document.getElementById("caja");

window.cargar = unshowmas.cargar;

document.getElementById("USM").addEventListener("click", () => {
    caja.innerHTML = unshowmas.data;
    unshowmas.cargar();
    });