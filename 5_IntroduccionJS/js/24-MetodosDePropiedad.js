// Metodos de propiedad
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción con el ID: ${id}`);
        
    },
    pausar: function(){
        console.log('Pausando.....');
        
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist ${nombre}`);
        
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo playlist de nombre ${nombre}`);
        
    }
}
reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion con ID: ${id}`);
    
}
reproductor.reproducir(5);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal')