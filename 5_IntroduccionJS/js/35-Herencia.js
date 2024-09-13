// POO

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

// herencia
class Libro extends Producto  {

    constructor(nombre,precio,isbn){
        super(nombre,precio);
        this.isbn = isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()}, isbn es:  ${this.isbn}`;
    }
    getPrecio(){
        return super.getPrecio();
    }
}

const libro = new Libro('JavaScript, la revolucion',200,'4rgf567');
console.log(libro.formatearProducto());
console.log(libro.getPrecio());

console.log(producto2.formatearProducto());