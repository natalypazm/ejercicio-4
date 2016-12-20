var minutos,costoMinuto,resultado;
minutos = prompt("Ingrese el número de minutos hablados");
costoMinuto = prompt("Ingrese el monto de costo por minuto hablado");
resultado = parseFloat(minutos)*parseFloat(costoMinuto);
alert(resultado);