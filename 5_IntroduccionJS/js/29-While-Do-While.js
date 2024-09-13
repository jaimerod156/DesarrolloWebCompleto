// While loop
const carrito = [
    {nombre:'Monitor 20 Pulgadas', precio: 500},
    {nombre:'Television 60 Pulgadas', precio: 600},
    {nombre:'Tablet', precio: 300},
    {nombre:'Audifonos', precio: 200},
    {nombre:'Teclado', precio: 50},
    {nombre:'Celular', precio: 500},
    {nombre:'Bocinas', precio: 200},
    {nombre:'Laptop', precio: 800},
];

let index = 0;
while(index < carrito.length){
    console.log(carrito[index].nombre);
    index++;
    
}
index = 0;
//Do While
do{
    console.log(carrito[index]);
    index++;
}while(index < carrito.length)
