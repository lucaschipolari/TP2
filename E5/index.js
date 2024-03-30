/*
5- Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R,
W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá indicarse con un alert y volver a
preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
Ejemplo:
Input: 40773821 Output: ‘L’
*/

do {
  let dni = prompt("Ingrese su DNI de 0 a 99999999");
  if (dni !== null) {
    if (!isNaN(dni)) {
      dni = Number(dni);
      if (Number.isInteger(dni)) {
        if (dni >= 0 && dni <= 99999999) {
          let resto = dni % 23;
          let letra;
          switch (resto) {
            case 0:
              alert("T");
              break;
            case 1:
              alert("R");
              break;
            case 2:
              alert("W");
              break;
            case 3:
              alert("A");
              break;
            case 4:
              alert("G");
              break;
            case 5:
              alert("M");
              break;
            case 6:
              alert("Y");
              break;
            case 7:
              alert("F");
              break;
            case 8:
              alert("P");
              break;
            case 9:
              alert("D");
              break;
            case 10:
              alert("X");
              break;
            case 11:
              alert("B");
              break;
            case 12:
              alert("N");
              break;
            case 13:
              alert("J");
              break;
            case 14:
              alert("Z");
              break;
            case 15:
              alert("S");
              break;
            case 16:
              alert("Q");
              break;
            case 17:
              alert("V");
              break;
            case 18:
              alert("H");
              break;
            case 19:
              alert("L");
              break;
            case 20:
              alert("C");
              break;
            case 21:
              alert("K");
              break;
            case 22:
              alert("E");
              break;
            default:
              break;
          }
        } else {
          alert("Ingrese un número perteneciente el al rango");
        }
      } else {
        alert("Ingrese un número entero");
      }
    } else {
      alert("Ingrese un número valido");
    }
  } else {
    if (confirm("Desea terminar?")) {
      break;
    }
  }
} while (true);
