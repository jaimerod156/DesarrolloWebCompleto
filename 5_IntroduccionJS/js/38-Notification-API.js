const boton = document.getElementById('boton');

boton.addEventListener('click',()=>{
    Notification.requestPermission()
    .then(resultado => console.log('El resultado es ',resultado)
    )
    
})

if(Notification.permission == 'granted'){
    new Notification('Esta es la notificacion',{
        icon:'./logo.svg',
        body: 'Codigo con Juan, los mejores titulares'
    })
}

