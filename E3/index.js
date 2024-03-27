/*
3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
guión -.
Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

*/
let cadenas = [];
do{ 
    let cadena = prompt('Introduce una cadena de texto:');
    if(cadena !== null){
        if(cadena.trim().length>0){
            cadenas.push(cadena);
        }
    }else{
        if(confirm('Desea terminar?')){
            alert(cadenas.join(' - '));
            break;
        }
    }
    }while(true);