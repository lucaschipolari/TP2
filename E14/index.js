/*
14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo
– entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué
tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”

*/

let cadena;

do{
    cadena= prompt('Ingrese una cadena de texto');
    let arreglo='';
    if(cadena!== null){
        for(let i=1; i<cadena.length; i++){
           if(i===cadena.length-1){
            arreglo += cadena.charAt(i);
           }else{
               arreglo += cadena.charAt(i)+'-';
           }
        }
        alert(arreglo);
    }else{
        if(confirm('Desea terminar?')){
            break;
        }
    }

}while(true);