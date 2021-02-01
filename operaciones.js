'use strict'

var opc= parseInt(prompt("Elije la operación a realizar: \n1.Suma\n2.Resta\n3.Multiplicación\n4.División"));
var x= parseInt(prompt("Ingresa Valor 1"));
var y= parseInt(prompt("Ingresa Valor 2"));
var operacion="";
var resultado=0;

switch(opc){
    case 1:
        var operacion="SUMA";
        resultado=parseInt(x+y);
    break;
    case 2:
        var operacion="RESTA";
        resultado=parseInt(x-y);
    break;
    case 3:
        var operacion="MULTIPLICACIÓN";
        resultado=parseInt(x*y);
    break;
    case 4:
        var operacion="DIVISIÓN";
        if(y==0){
            document.write("ERROR: No puedes dividir entre CERO");
        }else{
            resultado=parseInt(x/y);
        }
    break;
}
alert("El resultado de la "+operacion+" es: "+resultado);