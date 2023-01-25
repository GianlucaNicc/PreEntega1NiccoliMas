// CALCULAR PAGOS EN CUOTAS SOBRE UN MONTO DETERMINADO

let montoPagar = parseInt(prompt('Ingrese el monto a pagar'));

let cantCuotas = parseInt(prompt('¿En cuantas cuotas quiere hacer el pago?'));

while(cantCuotas != 3 && cantCuotas != 6 && cantCuotas != 12){

    alert('No contamos con esa cantidad de cuotas. Elija entre 3, 6 y 12');
    cantCuotas = parseInt(prompt('¿En cuantas cuotas quiere hacer el pago?'));
}

function calculoCuotas(monto, cuotas, interes){
    return monto * interes / cuotas;
}

let tieneIva = prompt('incluye IVA? Si / No');

let interes = 1;

if(tieneIva == 'si'){
    interes = 1.21;
}else {
    interes = 1;
}

let precioFinal = calculoCuotas(montoPagar,cantCuotas,interes);

alert('Vas a pagar ' + cantCuotas + ' cuotas de ' + precioFinal);