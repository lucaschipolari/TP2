
/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un
mensaje que ya puede conducir, si la edad ingresada no es un número válido
indicarlo en un mensaje.
*/



do{
    let edad = prompt('Ingrese la edad');
    if(edad !== null || edad.trim.length > 0){
        if(Number(edad)){
            if(Number(edad) >= 18){
                alert('Puede conducir');
            }else{
                alert('No puede conducir');
            }
        }else{
            alert('El ingreso no es un numero valido');
        }
    }

}while(true);