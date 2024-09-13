// Arreglos o Arrays
const numeros = [10, 20,30,40,50];
console.log(numeros);
console.table(numeros);

const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo');
console.table(meses)

//acceder a los valores de un arreglo
console.log(numeros[4]);

//conocer la extencion de un arreglo
console.log(numeros.length);

//iterar todos los elemento
meses.forEach( mes => {
    console.log(mes);
})

