// Async Await

function descargarNuevosClientes(){
    return new Promise( resolve =>{
        console.log('Descargando clientes...espere....');

        setTimeout(()=>{
            console.log('Los clientes fueron descargados');
            
        },5000);

    })
}

async function app(){
    try {
        const resultado = await descargarNuevosClientes();
        mostrarClientes(resultado);
        console.log(resultado);
        

    } catch (error) {
        console.log(error);
        
    }
    
}

app();

console.log('Este codigo no se bloquea');

