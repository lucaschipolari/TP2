// 13- Realiza un script que pida un texto y lo muestre en mayúsculas
let texto;
do{
    texto = prompt('Introduce un texto');
    if(texto!== null){
        if(texto!==undefined){
            if(texto.trim().length>0){
                alert(texto.toUpperCase());
                break;
            }else{
                alert('Introduce un texto');
            }
        }else{
            alert('Introduce un texto');
        }
        
    }else{
        break;
    }
}while(true);