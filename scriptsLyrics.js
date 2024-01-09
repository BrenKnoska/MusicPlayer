const selectorCanciones = document.querySelectorAll(".selectorLyrics");
const contenedorDeLetras = document.getElementById("contenedorDeLetras");

const cancionesLetras = [
  {
    id: "00",
    titulo: "Canción 1",
    canción: "se sentía fantasia",
    letra: `
    <u>Se sentía
    fantasía</u> <br><br>
    Creer en las mentiras <br>
    algo que se sentía fantasía <br>
    un cuento que me gustó escuchar <br>aunque no fue verdad <br> 
   <br> 
    
    Quiero cantar
    pero no quiero que me escuchen <br>
    quiero mostrar, pero me prenden las luces <br>
    
    ¿sentir o morirme? ¿o morirme y sentir? <br>
    el tiempo pesa que pase con heridas <br>  me sacó de mi <br><br>
    
    A veces solo somos las segundas opciones <br>
    las primeras mentiras para así conformarse <br>
    esos ojos que dicen; solo verte <br>
    ven el reflejo de alguien <br><br>
    
    escribo, no soy nada <br>
    perdón, duele un poco <br>
    matarme con la almohada <br>
    esperando que toque fondo <br>
    
    pastillas para el olvido <br>
    sombras que recordar <br>
    pasos silenciosos <br>
    fuertes como tempestad <br>
    `,
  },

  {
    id: "01",
    titulo: "Canción 2",
    canción: "destello fugaz",
    letra: ` <u>Destello fugaz</u>  <br> <br> Te dejé atrás <br> 
    me resigné muy al final <br>
    todo lo intenté <br>
    pero no lo supiste ver <br> <br>
    No te canto más <br>
    mi etapa en la que estaba mal <br>
    te resguardé en canción <br>
    para llevarte en mi interior <br>
    No pudo ser <br>
    y bien recé todas las noches <br>
    Algún día quizás <br>
    en  otra vida <br>
    no nos vaya mal <br>
    <br><br>
    la ultima vez que te vi ya lo sabía <br>
    y atesoré la sensación <br>
    de ese recuerdo, de esa caricia <br>
    <br>
    No te canto más <br>
    mi etapa en la que estaba mal <br>
    te resguardé en canción <br>
    para llevarte en mi interior <br>
    No pudo ser <br>
    y bien recé todas las noches <br>
    Algún día quizás <br>
    en  otra vida <br>
    podamos estar. <br>
    `,
  },

  {
    id: "02",
    titulo: "Canción 3",
    canción: "distancia inerte",
    letra: ` <u>Distancia Inerte</u>  <br> <br> Silencio, siempre hay silencio <br> 
    siempre en mi mente <br> no me encuentro <br>
Inerte, quiero tenerte <br>
pero a pesar de todo sé <br>
que el mal, siempre lo haces presente <br>
<br><br>
distancia, deberia alejarme <br>
no le hago ningun bien a nadie <br>
como soy, como estoy <br>
<br><br>
problemas, siempre hay problemas <br>
siempre soy yo el error <br>
por favor, salí de la habitación. <br>

    `,
  },

  {
    id: "03",
    titulo: "Canción 4",
    canción: "silencio en la tempestad",
    letra: ` <u>Silencio en la tempestad</u>  <br>  <br>
    Ya en nada confio <br>
    nada en lo que tenga que ver con vos <br>
    ya no <br>
    <br>
    
    No sé cuanto valgo <br>
    ni si está bien quien soy <br>
    pero lo que si sé es que no valgo para vos <br>
    <br>
    
    Ya me siento sola  <br>
    con vos o sin vos <br>
    y por primera vez <br>
    prefiero estar solo yo <br>
    
    No van a sonar esas campanas que escuché en mi sueño <br>
    no con vos.
    `,
  },

  {
    id: "04",
    titulo: "Canción 5",
    canción: "flor del vacío",
    letra: ` <u>Flor del vacío</u> <br> <br> Tan triste se hizo otoño  <br>
    sabiendo que en verano te fuiste  <br>
    ya una flor del vacío soy  <br> 
    Sos como el aire <br> no te veo pero tengo que respirarte  <br>
    Ya una flor del vacío soy  <br>
     <br> <br>
    
    Me pregunto cuánto más <br> mi mente va a poder esperarte  <br> 
    porque mi corazón se rindió hace tiempo ya   <br>
    ya una flor del vacío soy  <br>
    Te tuve que hacer canción para inmortalizarte  <br>
    porque de otra forma no te vas a quedar  <br>
      <br>
    Mi mente me dice "no te olvides que lo queres"  <br>
    pero yo realmente ya no quiero pensar  <br>
    Ya no sé quien soy , ya falta una parte de mi  <br>
    Ya una flor del vació soy  <br>
     <br>
    Mi mente me dice "no te olvides que lo queres"  <br>
    pero yo realmente ya no quiero pensar  <br>
    ya no sé quien soy, ya falta una parte de mi  <br>
    ¿Por qué siempre te vas?<br>
  porque nunca te podés quedar <br> mi corazón ya se llenó de oscuridad,  <br>
y sé que esta vez, no voy a dar marcha atrás.
    `,
  },

  {
    id: "05",
    titulo: "Canción 6",
    canción: "en esta gran ciudad",
    letra:  `<u>En esta gran ciudad</u> <br><br>
    Me siento sola <br>
    en esta gran ciudad <br>
    flotando tanto <br>
    pensamientos allá van <br>
     <br>
    
    ¿Por qué compongo algo que nadie va a escuchar? <br>
    revoca el eco <br> en esta gran ciudad 
    <br> <br>
    No pienso nada <br>
    solo quiero volar <br>
    de las artimañas <br>
    que encierra el huracán  <br> <br>
    
    No pasa nada,<br>
    El viento seguirá <br>
    siempre a su curso <br>
    guiándome a la verdad <br>
    <br>
    
    Me siento sola <br>
    en esta gran ciudad <br>
    mis palabras zarpan <br>
    en el muelle de invisibilidad.  <br> ` ,
  },
];

// elemento.attributes.value.value;

selectorCanciones.forEach((elemento) => {
  elemento.addEventListener("click", () => {
    let valorCancion = elemento.attributes.value.value;

    if (valorCancion == "00") {
      contenedorDeLetras.innerHTML = cancionesLetras[0].letra;
    }
    if (valorCancion == "01") {
      contenedorDeLetras.innerHTML = cancionesLetras[1].letra;
    }
    if (valorCancion == "02") {
      contenedorDeLetras.innerHTML = cancionesLetras[2].letra;
    }
    if (valorCancion == "03") {
      contenedorDeLetras.innerHTML = cancionesLetras[3].letra;
    }
    if (valorCancion == "04") {
      contenedorDeLetras.innerHTML = cancionesLetras[4].letra;
    }
    if (valorCancion == "05") {
      contenedorDeLetras.innerHTML = cancionesLetras[5].letra;
    }
  });
});

//CÓDIGO BUCLE//
//cancionesLetras.map((cancion) => {
//   if (valorCancion === cancion.id) {
//     contenedorDeLetras.innerHTML = cancion.letra;
//   }
// });
