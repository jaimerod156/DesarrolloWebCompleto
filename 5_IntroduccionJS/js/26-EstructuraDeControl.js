//Estructuras de control

const puntaje = 10000;

if(puntaje === 1000){
    console.log("si el puntaje es 1000");
    
}else{
    console.log("No es igual a 1000");
    
}

const efectivo = 1000;
const carrito = 800;

if(efectivo >= carrito){
    console.log('El usuario puede pagar');
    
}else{
    console.log("Fondos insuficientes.");
    
}

const rol = 'EDITOR'
if(rol === 'ADMIN'){
    console.log('Acceso a todo el sistema');
    
}else if(rol==='EDITOR'){
    console.log('Acceso limitado. No puedes hacer mucho');
    
}else{
    console.log('No tienes acceso');
    
}