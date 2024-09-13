// THIS

const reservacion = {
    nombre: 'Jaime',
    apellido: 'Rodriguez',
    total: 3000,
    pagado: false,
    informacion: function(){
        console.log(`Nombre: ${this.nombre} reservó y su cantidad a pagar es ${this.total}`);
        
    }
}
const reservacion2 = {
    nombre: 'Pedro',
    apellido: 'Raez',
    total: 2000,
    pagado: true,
    informacion: function(){
        console.log(`Nombre: ${this.nombre} reservó y su cantidad a pagar es ${this.total}`);
        
    }
}

console.log(reservacion.nombre);
reservacion.informacion();
reservacion2.informacion()
