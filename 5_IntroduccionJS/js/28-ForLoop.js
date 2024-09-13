// For Loop
for(let i=0;i<5;i++){
    console.log(i);
}

for(let i=1; i<50; i++){
    if(i%2===0){
        console.log(`El numero ${i} es par`);
    }else{
        console.log(`El numero ${i} es impar`);
        
    }
}

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

for(let i=0; i< carrito.length; i++){
    console.log(carrito[i].nombre);
    
}

