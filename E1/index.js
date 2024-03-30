
/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un
mensaje que ya puede conducir, si la edad ingresada no es un número válido
indicarlo en un mensaje.
*/



do {
    let edad = prompt('Ingrese la edad');
    if (edad !== null && edad.trim().length > 0) {
        if (!isNaN(edad)) {
            edad = Number(edad);
            if (Number.isInteger(edad) && edad >= 0) {
                if (edad >= 18) {
                    alert('Puede conducir');
                } else {
                    alert('No puede conducir');
                }
            } else {
                alert('El ingreso no es un número entero válido');
            }
        } else {
            alert('El ingreso no es un número válido');
        }
    } else {
        break;
    }
} while (true);
