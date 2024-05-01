function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

// while mientras una condición sea verdadera, estará repitiendo una cierta cantidad de veces el código
while (contador < 9){
    const tecla=listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    // console.log(instrumento)

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)

    tecla.onclick = function(){
        playSonido(idAudio);
    };
    contador++;
    // console.log('Vuelta ' + contador)
}



// document.querySelector('.tecla_pom').onclick = playSonidoPom;