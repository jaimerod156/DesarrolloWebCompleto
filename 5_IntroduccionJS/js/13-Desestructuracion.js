const producto = {
    nombreProducto:'Monitor 20 pulgadas',
    precio: 300,
    disponible:true
};

// nombre anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto
// console.log(precioProducto);
// console.log(nombreProducto);

// Desestructuracion de objetos
const { precio ,nombreProducto } = producto;

console.log(nombreProducto, precio);


