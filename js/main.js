/*
Realizar una página con un script que 
calcule el valor de la letra de un número 
de DNI (Documento nacional de indentidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división 
entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá 
una letra de las siguientes:  
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, 
Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá 
indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que 
el usuario pulse «cancelar».
*/

$(document).ready(function() {
    
    $("#calcular").focus();
    $("#enviar").click(presiona);

});//ready

function calculaDNI(div, num) {

    let aleatorio = Math.floor((Math.random() * 99) + 1);

      switch (div) {
          
          case 0:
              $("#resultado").val("T" + num + aleatorio + div + "MX");
          break;//case0
          
          case 1:
              $("#resultado").val("R" + num + aleatorio + div + "MX");
          break;//case1

          case 2:
              $("#resultado").val("K" + num + aleatorio + div + "MX");
          break;//case2

          case 3:
              $("#resultado").val("W" + num + aleatorio + div + "MX");
          break;//case3

          case 4:
              $("#resultado").val("A" + num + aleatorio + div + "MX");
          break;//case4

          case 5:
              $("#resultado").val("G" + num + aleatorio + div + "MX");
          break;//case5

          case 6:
              $("#resultado").val("M" + num + aleatorio + div + "MX");
          break;//case6

          case 7:
              $("#resultado").val("Y" + num + aleatorio + div + "MX");
          break;//case7

          case 8:
              $("#resultado").val("F" + num + aleatorio + div + "MX");
          break;//case8

          case 9:
              $("#resultado").val("P" + num + aleatorio + div + "MX");
          break;//case9

          case 10:
              $("#resultado").val("D" + num + aleatorio + div + "MX");
          break;//case10

          case 11:
              $("#resultado").val("X" + num + aleatorio + div + "MX");
          break;//case11

          case 12:
              $("#resultado").val("B" + num + aleatorio + div + "MX");
          break;//case12

          case 13:
              $("#resultado").val("N" + num + aleatorio + div + "MX");
          break;//case13

          case 14:
              $("#resultado").val("J" + num + aleatorio + div + "MX");
          break;//case14

          case 15:
              $("#resultado").val("Z" + num + aleatorio + div + "MX");
          break;//case15

          case 16:
              $("#resultado").val("S" + num + aleatorio + div + "MX");
          break;//case16

          case 17:
              $("#resultado").val("Q" + num + aleatorio + div + "MX");
          break;//case17

          case 18:
              $("#resultado").val("V" + num + aleatorio + div + "MX");
          break;//case18

          case 19:
              $("#resultado").val("H" + num + aleatorio + div + "MX");
          break;//case19

          case 20:
              $("#resultado").val("L" + num + aleatorio + div + "MX");
          break;//case20

          case 21:
              $("#resultado").val("C" + num + aleatorio + div + "MX");
          break;//case21

          case 22:
              $("#resultado").val("E" + num + aleatorio + div + "MX");
          break;//case22

      }//switch

}//calculaDNI

function presiona() {
    
    let numero = parseInt( $("#calcular").val() );
    let div    = 0;

      if ( $("#calcular").val() == "" ) {
          
          alert("Campo vacio\n por favor ingrese datos");

      }//if
      else if (isNaN(numero) || numero < 0) {
          
          alert("Datos no validos\n intentelo de nuevo");
          $("#calcular").val("");

      }//else-if
      else {
          
          div = numero % 23;
          calculaDNI(div, numero);
          $("#calcular").val("");

      }//else

}//presiona