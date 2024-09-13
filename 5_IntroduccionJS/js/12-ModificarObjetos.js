const producto = {
    nombreProducto:'Monitor 20 pulgadas',
    precio: 300,
    disponible:true
};

console.log(producto);

//Agregar nuevas propiedades
producto.imagen = 'imagen.png'
console.log(producto);

//Eliminar propiedades
delete producto.disponible;
console.log(producto);

