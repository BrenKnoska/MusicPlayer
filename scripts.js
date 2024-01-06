//guarda en variable referencia a los elementos del dom
const playCancion = document.getElementById("play");
const sigCancion = document.getElementById("forward");
const atrasCancion = document.getElementById("backward");
const pausaCancion = document.getElementById("pause");
const disco = document.getElementsByClassName("Disco")[0];
const pausaBoton = document.getElementById("pausaBoton");

/**
 *@constant se crea un array anidado que contiene la letra y el nombre de cada cancion
 */
const listaCanciones = [
  ["./audio/Se_sentia_fantasia.mp3", "Se sentia fantasia"],
  ["./audio/Destello_Fugaz.mp3", "Destello Fugaz"],
  ["./audio/Distancia_inerte.mp3", "Distancia inerte"],
  ["./audio/Silencio_en_la_tempestad.mp3", "Silencio en la tempestad"],
  ["./audio/Flor_en_el_vacio.mp3", "Flor en el vacío"],
];
//creo una pista de audio que inicia en la posicion 0,0 de mi array anidado
let numeroPista = 0;
let reproducir = new Audio(listaCanciones[numeroPista][0]);

// agrupa las funcionalidades que tienen que ejecutarse, si esta en estado "Play" o en estado "Pause"
// que es el otro estado posible en los reproductores de musica
function cambiarEstadoReproductor(estadoActual) {
  reproducir.pause();
  if (estadoActual == "play") {
    disco.classList.add("animacionDisco");
    btnPlay.classList.add("ocultarElemento");
    pausaBoton.classList.remove("ocultarElemento");
    reproducir.play();
  } else {
    disco.classList.remove("animacionDisco");
    btnPlay.classList.remove("ocultarElemento");
    pausaBoton.classList.add("ocultarElemento");
  }
}
//escucho los eventos de cada boton de mi DOM y uso el cambio de estado cuando corresponda
playCancion.addEventListener("click", function () {
  cambiarEstadoReproductor("play");
});

pausaBoton.addEventListener("click", function () {
  cambiarEstadoReproductor("pause");
});

sigCancion.addEventListener("click", function () {
  cambiarEstadoReproductor("pause");
  if (numeroPista < listaCanciones.length && numeroPista >= 0) {
    numeroPista++;
    reproducir = new Audio(listaCanciones[numeroPista][0]);
    cambiarEstadoReproductor("play");
  }
});

//Botón reproductor atrás
atrasCancion.addEventListener("click", function () {
  cambiarEstadoReproductor("pause");
  if (numeroPista > 0) {
    numeroPista--;
    reproducir = new Audio(listaCanciones[numeroPista][0]);
    cambiarEstadoReproductor("play");
  }
});
