const numeros = [10, 20,30,40,50];
console.table(numeros);

const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo');
console.table(meses)

//agregar un elemento al array
numeros.push(90);// agrega datos al final del arreglo
console.table(numeros);

//lo que se recomienta es no modificar los datos originales
numeros.unshift(-10,20,30)//agrega datos al inicio del arreglo
console.table(numeros);

//Eleiminar datos
//meses.pop() //elimina el ultimo elememto del arreglo
// console.table(meses)

//meses.shift();//elimina el primer elemeto del arreglo
console.table(meses)
//metodo SPLICE
meses.splice(2,1)
console.table(meses)

//mantener datos originales y crear uno nuevo
//spread operator
const nuevoArreglo = ['Diciembre',...meses,'junio'];
console.log(nuevoArreglo);

