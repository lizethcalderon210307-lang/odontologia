
let reproductor = null;

function onYouTubeIframeAPIReady() {

    reproductor = new YT.Player("reproductor", {

        videoId: "y-iA6iN1cf4",

        playerVars: {
            controls: 0,
            rel: 0
        }

    });

}

function abrirRegalo() {

    document.querySelector(".inicio").style.display = "none";

    const carta = document.querySelector("#carta");

    carta.style.display = "block";

    carta.classList.add("aparecer");

    document.querySelector("#botonMusica").style.display = "block";

    if (reproductor) {
    reproductor.playVideo();
}

}
function controlarMusica() {

    if (!reproductor) {
        return;
    }

    const boton = document.querySelector("#botonMusica");

    const estado = reproductor.getPlayerState();

    if (estado === YT.PlayerState.PLAYING) {

        reproductor.pauseVideo();

        boton.textContent = "🔇";

    } else {

        reproductor.playVideo();

        boton.textContent = "🎵";

    }

}


function mostrarRecuerdos() {

    document.querySelector("#carta").style.display = "none";

    const recuerdos = document.querySelector("#recuerdos");

    recuerdos.style.display = "block";

    recuerdos.classList.add("aparecer");

}


function mostrarRazones() {

    document.querySelector("#recuerdos").style.display = "none";

    const razones = document.querySelector("#razones");

    razones.style.display = "block";

    razones.classList.add("aparecer");

}


function mostrarSorpresa() {

    document.querySelector("#razones").style.display = "none";

    const sorpresa = document.querySelector("#sorpresa");

    sorpresa.style.display = "block";

    sorpresa.classList.add("aparecer");

}


function abrirCaja() {

    document.querySelector(".caja").style.display = "none";

    document.querySelector(".instruccion").style.display = "none";

    document.querySelector("#mensajeFinal").style.display = "block";

}

function actualizarContador() {

    const inicio = new Date(2021, 11, 15);

    const ahora = new Date();

    let anios = ahora.getFullYear() - inicio.getFullYear();

    let meses = ahora.getMonth() - inicio.getMonth();

    let dias = ahora.getDate() - inicio.getDate();

    let horas = ahora.getHours() - inicio.getHours();

    let minutos = ahora.getMinutes() - inicio.getMinutes();

    let segundos = ahora.getSeconds() - inicio.getSeconds();


    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }

    if (minutos < 0) {
        minutos += 60;
        horas--;
    }

    if (horas < 0) {
        horas += 24;
        dias--;
    }

    if (dias < 0) {

        const ultimoMes = new Date(
            ahora.getFullYear(),
            ahora.getMonth(),
            0
        ).getDate();

        dias += ultimoMes;
        meses--;
    }

    if (meses < 0) {
        meses += 12;
        anios--;
    }


    document.querySelector("#anios").textContent = anios;

    document.querySelector("#meses").textContent = meses;

    document.querySelector("#dias").textContent = dias;

    document.querySelector("#horas").textContent = horas;

    document.querySelector("#minutos").textContent = minutos;

    document.querySelector("#segundos").textContent = segundos;

}


actualizarContador();

setInterval(actualizarContador, 1000);