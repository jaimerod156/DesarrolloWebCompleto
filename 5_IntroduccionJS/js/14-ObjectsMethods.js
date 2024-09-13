//"use strict"  // ejecutar JS en modo estricto

const producto = {
    nombreProducto:'Monitor 20 pulgadas',
    precio: 300,
    disponible:true
};

//Object.freeze(producto); //no permite agregar, borrar o modificar propiedades del objeto
Object.seal(producto) //no permite agregar, borrar pero si modificar propiedades del objeto

producto.imagen = 'imagen.png';

delete producto.precio;

producto.precio = 400; //modificar propiedad precio

console.log(Object.isFrozen(producto));

console.log(producto);