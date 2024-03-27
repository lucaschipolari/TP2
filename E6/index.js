/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….*/

do{
    let n = prompt("Ingrese un número entero");
    if(n !== null){
    if (isNaN(n)) {
        alert("Ingrese un número entero");
    }else if (n < 1 || n > 30) {
        alert("Ingrese un número entre 1 y 30");
    }else{
        for (let i = 1; i <= n; i++) {
            for (let j =1; j <= i; j++) {
                console.log(i);
            }
        }
        break;
        }
    }else{
        break;
    }
    

}while(true);

