/*
9- Crea un script que escriba los números del 1 al 500, que indique cuáles son
múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por
ejemplo :
*/

for(let num = 1; num <= 500; num++) {
    if(num % 4 === 0) {
        console.log(num +' (Múltiplo de 4)');
    }else if(num % 9 === 0){
        console.log(num +' (Múltiplo de 9)');
    }else if(num % 5 === 0){
        console.log('————————————————————');
    }
    else{
        console.log(num);
    }
}