// Object Constructor
function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
// Prototype: crear funciones que solo se utilizan en un objeto especifico
Cliente.prototype.formatearCliente = function(){//esta atada a Producto
    return `El Cliente ${this.nombre} ${this.apellido}`;
}
const producto = {
    nombre: 'table',
    precio:500
}

function Producto(nombre,precio){
    this.nombre= nombre;
    this.precio = precio;
}

// Prototype: crear funciones que solo se utilizan en un objeto especifico
Producto.prototype.formatearProducto = function(){//esta atada a Producto
    return `El producto ${this.nombre} tiene un preco de ${this.precio}`;
}

const producto2 = new Producto('Monitor curvo de 40"',400);
const producto3 = new Producto('Laptop',1200);

const cliente = new Cliente('Edith','Rodriguez');
console.log(cliente);


console.log(producto2);
console.log(producto3);


