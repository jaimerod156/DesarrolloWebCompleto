// Arrays Methods

const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo');


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

//ForEach
meses.forEach(mes =>{
    console.log(mes);
    if(mes == 'Marzo')
        console.log('Marzo si existe');
})

// includes
let resultado = meses.includes('Diciembre');
console.log(resultado);

// SOME ideal para arreglo de objetos
resultado = carrito.some( (producto) =>{
    return producto.nombre === 'Celular pro'
})

//Reduce
resultado = carrito.reduce( (total, producto)=>{
    return total + parseInt(producto.precio)
},0)


// filter
resultado = carrito.filter(producto => producto.precio > 500)
console.log(resultado);

resultado = carrito.filter(producto => producto.nombre !== "Celular")
console.log(resultado);


