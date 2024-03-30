/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número
que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que
indica 30).*/
let n;
do{
    n = prompt('Ingrese el numero maximo de piramide');
if(n!==null){
    if(n !== undefined){
        n = n.trim();
        if(n.length > 0 && !isNaN(n)){
            n = Number(n);
            if(Number.isInteger(n)){
                if(n >= 1 && n <= 50){
                    for(let i = n; 1 <= i; i--){
                        for(let j = i; 1 <= j; j--){
                            console.log(i);
                        }
                    }
                    break;
                }else{
                    alert('Introduce un perteneciente al rango 1 a 50');
                }
            }else{
                alert('Introduce un numero valido');
            }
        }else{
            alert('Introduce un numero valido');
        }
    }else{
        alert('Introduce un numero valido');
    }
    
}else{
    break;
}
}while(true);