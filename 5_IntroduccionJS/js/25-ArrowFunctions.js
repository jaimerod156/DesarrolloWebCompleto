// Arrow Functions
const sumar = (n1,n2) => console.log(n1 + n2);
    
sumar(4,5);

const aprendiendo = tecnologia =>{
    console.log(`Aprendiendo ${tecnologia}`);
    
}
aprendiendo('Tecnologia');


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
meses.forEach( mes =>{
    console.log(mes);
    if(mes == 'Marzo')
        console.log('Marzo si existe');
})

let resultado;
// SOME ideal para arreglo de objetos
resultado = carrito.some( producto =>  producto.nombre === 'Celular pro')
console.log(resultado);

//Reduce
resultado = carrito.reduce( (total, producto)=>{
    return total + parseInt(producto.precio)
},0)
console.log(resultado);


// filter
resultado = carrito.filter( producto => producto.precio > 500)
console.log(resultado);

resultado = carrito.filter( producto => producto.nombre !== "Celular")
console.log(resultado);

