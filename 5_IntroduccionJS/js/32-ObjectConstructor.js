//POO

const producto = {
    nombre: 'table',
    precio:500
}

// Object Constructor
function Producto(nombre,precio){
    this.nombre= nombre;
    this.precio = precio;
}

const producto2 = new Producto('Monitor curvo de 40"',400);
const producto3 = new Producto('Laptop',1200);

console.log(producto2);
console.log(producto3);
