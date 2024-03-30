/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el
nombre del mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/
let edades= [];
let nombres= [];
let personas= {};
let ingresos = 1;
do{
    let nombre=prompt('Ingrese el nombre de la persona: '+ ingresos)
    let edad = prompt('Ingrese la edad de la persona: '+ingresos);
    if(nombre !== null){
        if (nombre.trim().length > 0) {
        if (edad!== null) {
                if(edad.trim().length > 0){
                    edad = Number(edad);
                    if(!isNaN(edad)){
                        if(edad >= 0 && edad <= 100){
                            nombres.push(nombre);
                            edades.push(edad);
                            ingresos++;
                        }else{
                        
                            alert('Introduce un número válido');
                        }
                    }else{
                        alert('Introduce un número válido');
                    }
                }else{
                    alert('Introduce un número válido');
                }
            
        }else{
            break;
        }
    }else{
        alert('Ingrese un nombre valido');
    }
}else{
    break;
}

}while(ingresos<=3 );


let mayorEdad = Math.max(...edades);
let indiceMayor= edades.indexOf(mayorEdad);
let nombreMayor = nombres[indiceMayor];
console.log('La persona de mayor edad es ' + nombreMayor + ' con ' + mayorEdad + ' años.');