let numeroSecreto = 0;
let intentos = 0;
//Todos los Arreglos inician con posicion '0'.
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }  else{
        //el usuario no acerto
        if (numeroSecreto > numeroDeUsuario){
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }else{
            asignarTextoElemento('p','El numero secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numerosSorteados);
    //Si ya sorteamos todos l,os numeros
    if(numerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles.')
    }else{

        // si en numero generado esta incluido en las lista
        if(numerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
    console.log(numeroSecreto);
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensajhe de intervalo de numeros
    //Deshabilitar boton de juego nuevo
    //inicializar el numero de intentos
    condicionesIniciales();
    //Jenerar el numero aleatorio
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();