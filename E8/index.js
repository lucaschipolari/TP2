/*
8- Crea script para generar pirámide siguiente con los números del 1 al número
que indique el usuario (no mayor de 50)
*/ 
let n;
let bandera=0
do{
    if(bandera===1) break;
    n= prompt("Ingrese un numero entero no mayor de 50");
    if(n!==null){
        n=n.trim();
           if(n.length>0){
            n=Number(n);
            if(Number.isInteger(n)){
            if(n>=1 && n<=50){
                for(let i=1;i<=n;i++){
                    let arreglo = '';
                    for(let j=1;j<=i;j++){
                        arreglo+=j; 
                        bandera=1;
                    }
                    console.log(arreglo);
                }

            }else{
                alert("Ingrese un numero valido (entero)");
            }

           }else{
            alert("Ingrese un numero valido");
           } 
        }else{
            alert("Ingrese un numero valido");
        }
    }else{
        break;
    }
}while(1);