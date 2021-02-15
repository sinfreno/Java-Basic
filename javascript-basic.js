// ejercicio 1
console.log("Hello world!");

// ejercicio 2
alert("Me llamo Carlos!");

// ejercicio 3
let nom = "carlos";
let cognom = "Pérez";
console.log(nom + " " + cognom);

// ejercicio 4
let num1 = 5;
let num2 = 6;
sum = num1 + num2;
console.log("La suma de 5 y 6 es " + sum);

// ejercicio 5
var nota_examen = prompt("Introduce tu nota");
    if (nota_examen >= 5 && nota_examen <= 10){
        alert("Enhorabuena! Has aprovado con un " + nota_examen );
    }
    else if( nota_examen >= 0 && nota_examen < 5){
        alert("Esfuerzate más! Has suspendido con un " + nota_examen );
    }
    else {
        alert("Es imposible que hayas sacado esa nota! ");
    }

// ejercicio 6
var frase = "Tinc un cotxe de color blau";
console.log(frase);
var novafrase = frase.replace("blau", "verd");
console.log(novafrase);
var fraseou = frase.replace(/o/gi, "u");
console.log(fraseou);

// ejercicio 7

var llistat = ['taula', 'cadira', 'ordinador', 'libreta'];
var tam = llistat.length;
for ( cont = 0; cont < tam; cont++ ){
    console.log("l'objecte " + llistat[cont] + " es troba a la posició " + cont);
}

// ejercicio 8 Nivel 2
function calculadora(oper,n1,n2){
    if (oper == "sumar"){
        return  parseInt(n1) + parseInt(n2);
    }
    else if (oper == "restar"){
        return parseInt(n1) - parseInt(n2);
    }
    else if (oper == "multiplicar"){
        return parseInt(n1) * parseInt(n2);
    }
    else if (oper == "dividir"){
        if (n2 == 0){
            return "infinito";
        }
        else {
            return parseInt(n1) / parseInt(n2);
        }
    }

}

let oper = prompt("Introduce operación", "sumar, restar, multiplicar o dividir");
let n1 = prompt("Introduce el primer número", "1, 2, 3...");
let n2 = prompt("Introduce el segundo número", "1, 2, 3...");
alert( "El resultado de la operación es: " + calculadora(oper,n1,n2));