/*
10- Realiza un script que pida número de filas y columnas y escriba una tabla.
Dentro de cada una de las celdas deberá escribirse un número consecutivo en
orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/

let fila;
let columna;

do{
    fila= prompt('Ingrese el número de filas no mayor a 50');
    if(fila!==null){
        if(fila.trim().length > 0){
            columna= prompt('Ingrese el número de columnas no mayor a 50');
            if(columna!==null && columna.trim().length > 0){
                columna= Number(columna);
                fila= Number(fila);
                if(Number.isInteger(columna) && Number.isInteger(fila)){
                    if(columna >= 1 && columna <= 50 && fila >= 1 && fila <= 50){
                        let x = 1;
                        document.write('<table><tbody>');
                        for(let i = 1; i <= fila; i++){
                            for(let j = 1; j <= columna; j++){
                                    document.write(`<tr> ${x<10? '0'+x : x}</tr>`);
                                    x++;
                            }
                            document.write("<br>");
                        }
                        document.write('</tbody></table>');
                        break;
                    } else {
                        alert('Ingrese un numero valido');
                    }
                }else{
                    alert('Ingrese numeros enteros');
                }
                
            }
        }else{
            alert('Ingrese un numero valido');
        }
    }else{
        break;
    }
}while(true);