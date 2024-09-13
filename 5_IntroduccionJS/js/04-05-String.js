//Tipos de datos
//Leccion 106 - 107
//String
const producto = "Monitor de 20\"";
const producto2  = String('Monitor HD');
const producto3  = new String('Monitor de 30 Pulgadas');
const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';
const email = 'correo@correo.com';


console.log(producto);
console.log(producto.length);

console.log(typeof producto2);
console.log(typeof producto3);

console.log(tweet.length);
//IndexOf (retorna posicion)
console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('Tablet'));
console.log(email.indexOf('@'));


// Includes() retorna true o false
console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('Tablet'));
console.log(email.includes('@'));




