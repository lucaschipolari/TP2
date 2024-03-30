/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….*/
let n;
do{
    n = prompt('Ingrese un numero');
if(n!==null){
    if(n !== undefined){
        n = n.trim();
        if(n.length > 0 && !isNaN(n)){
            n = Number(n);
            if(Number.isInteger(n)){
                if(n >= 1 && n <= 30){
                    for (let i = 1; i <= n; i++) {
                        for (let j =1; j <= i; j++) {
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

