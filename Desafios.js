// 1.Crea una función que calcule el índice de masa corporal (IMC) de una persona a 
    //partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(altura, peso) {
    var imc = peso / (altura * altura);
    return imc;
}
    
// 2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calculoFactorial(numero){
    if (numero == 0 || numero == 1){
        return 1;
    } else{
        return numero * calculoFactorial(numero - 1);
    }
}

// 3.Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor 
    //equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). 
    //Para esto, considera la cotización del dólar igual a R$4,80.
function convertirDolarPesos(dolares){
    let precioDolar = 4.80;
    let pesos = dolares*precioDolar;
    return pesos;
}

// 4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
    //utilizando la altura y la anchura que se proporcionarán como parámetros.
function areaPerimetroRectangular(alto, ancho){
    let area =  alto * ancho;
    let perimetro = 2 * (alto + ancho);
    console.log(`El Area es ${area}`);
    console.log(`El Perimetro es ${perimetro}`);
}

// 5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
    //utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function areaPerimetroCircular(radio){
    let pi = 3.14
    let perimetro = pi*(radio*radio);
    let area = 2*pi*radio;
    console.log(`El Area es ${area}`);
    console.log(`El perimetro es ${perimetro}`);    
}

// 6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
let numero = prompt("introduce un numero del 1 al 10")

function tablaMultiplicar(num){
    let contador = 1
    while (contador <= 10){
        console.log(`${num}x${contador}=${num*contador}`);
        contador++;
    }
}
tablaMultiplicar(numero)