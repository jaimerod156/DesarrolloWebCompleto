// POO - Clases

class Producto{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un preco de ${this.precio}`;
    }
    getPrecio(){
        return this.precio
    }
}

const producto2 = new Producto('Monitor curvo de 40"',400);
const producto3 = new Producto('Laptop',1200);



console.log(producto2.formatearProducto());
console.log(producto3.getPrecio());
