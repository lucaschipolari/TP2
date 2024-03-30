/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
“cancelar” deberá indicarse la suma total de los números introducidos.*/

let suma = 0;
do {
  let numero = prompt("Ingrese un numero");
  if (numero !== null) {
    if (numero.trim().length > 0) {
      if (!isNaN(numero)) {
        numero = Number(numero);
        suma += numero;
      } else {
        alert("Ingrese un numero valido");
      }
    }
  } else {
    if (confirm("Desea terminar?")) {
      alert(suma);
      break;
    }
  }
} while (true);
