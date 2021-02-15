// ejercicio 1
console.log("Hello world!");

// ejercicio 2
alert("Me llamo Carlos!");

// ejercicio 3
var nom = "carlos";
var cognom = "Pérez";

// ejercicio 4
var num1 = 5;
var num2 = 6;
var sum = num1 + num2;

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

// ejercicio 8
function calculadora(oper,n1,n2){
    if (oper == "sumar"){
        console.log(parseInt(n1) + parseInt(n2));
    }
    else if (oper == "restar"){
        console.log(parseInt(n1) - parseInt(n2));
    }
    else if (oper == "multiplicar"){
        console.log(parseInt(n1) * parseInt(n2));
    }
}
var resultat = calculadora('multiplicar',40,20);
var resultat2 = calculadora('restar',40,20);
var resultat3 = calculadora('sumar',40,20);