const usuarioAutenticado = new Promise( (resolve, reject)=>{
    const auth = true;

    if (auth) {
        resolve('Usuario Autenticado'); // el promise se cumple
    } else {
        reject('No se pudo iniciar sesion'); // el promise no se cumple
    }
});
usuarioAutenticado
    .then( resultado => console.log(resultado) )
    .catch( error => console.log(error))

// En los Promises existen 3 valores
// Pending: No se ha cumplido pero tampoco se ha rechazado
// Fulfilled : Ya se cumplio
// Rejected: Se ha rechazado o no se pudo cumplir
