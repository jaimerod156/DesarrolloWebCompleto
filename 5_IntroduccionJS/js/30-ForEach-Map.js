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

//foreach
carrito.forEach( item => {console.log(item.nombre)});

// Map
newCarrito = [];
newCarrito = carrito.map( item =>`${item.nombre} - ${item.precio}` )

console.log(newCarrito);



