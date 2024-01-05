const playCancion = document.getElementById("play");
const sigCancion = document.getElementById("forward");
const atrasCancion = document.getElementById("backward");
const pausaCancion = document.getElementById("pause");
const disco = document.getElementsByClassName("Disco")[0];
const pausaBoton = document.getElementById("pausaBoton");

let reproducir;

listaCanciones = [
  ["./audio/Se_sentia_fantasia.mp3", "Se sentia fantasia"],
  ["./audio/Destello_Fugaz.mp3", "Destello Fugaz"],
  ["./audio/Distancia_inerte.mp3", "Distancia inerte"],
  ["./audio/Silencio_en_la_tempestad.mp3", "Silencio en la tempestad"],
  ["./audio/Flor_en_el_vacio.mp3", "Flor en el vacío"],
];

function listarCanciones(listaCanciones) {
  for (let i = 0; i < listaCanciones.length; i++) {
    for (let j = 0; j < listaCanciones[i].length; j++) {}
  }
}


playCancion.addEventListener("click", function () {
  reproducir = new Audio(`./audio/Se_sentia_fantasia.mp3`);
  reproducir.play();
  disco.classList.add("animacionDisco");
  btnPlay.classList.add("ocultarElemento");
  pausaBoton.classList.remove("ocultarElemento");
});

pausaBoton.addEventListener("click", function () {
  reproducir.pause();
  disco.classList.remove("animacionDisco");
  btnPlay.classList.remove("ocultarElemento");
  pausaBoton.classList.add("ocultarElemento");
});

sigCancion.addEventListener("click", function () {
  reproducir.pause();
  reproducir = new Audio(`./audio/Destello_Fugaz.mp3`);
  reproducir.sigCancion();
  disco.classList.add("animacionDisco");
});

sigCancion.addEventListener("click", function () {
  reproducir = new Audio(`./audio/Distancia_inerte.mp3`);
  reproducir.play();
  disco.classList.add("animacionDisco");
});
