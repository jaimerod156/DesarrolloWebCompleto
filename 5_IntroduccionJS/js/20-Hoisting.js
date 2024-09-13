//Hoisting

sumar(); //permitido
// Declaracion de funcion
function sumar(){
    console.log(10 + 10);
    
}


sumar2();//
// Expresion de la funcion
const sumar2 = function(){
    console.log(3 + 3);
}
