/*
3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
guión -.
Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

*/
let arreglo =[];
do{
    let cadena = prompt('Ingrese una cadena de texto');
    if(confirm()){
       alert(); 
        break;
    }else{
        arreglo.push(cadena);
    }

}while(true);
