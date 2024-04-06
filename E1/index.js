
/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un
mensaje que ya puede conducir, si la edad ingresada no es un número válido
indicarlo en un mensaje.
*/



do {
    let edad = prompt('Ingrese la edad');
    if (!(edad !== null && edad.trim().length > 0)) {
       break;
    }
    if (isNaN(edad) && parseInt(edad)) {
        alert('El ingreso no es un número válido');
        break;
    }
    edad = Number(edad);
    if (edad <= 0) {
            alert('El ingreso no es un número entero válido');
            break;
    }
    if (edad <= 18) {
        alert('No puede conducir');
        break;
    }
    alert('Puede conducir');
} while (true);
