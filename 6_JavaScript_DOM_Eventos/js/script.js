//Leccion 144
// querySelector
const heading = document.querySelector('.header__texto h2');
heading.textContent = 'Nuevo heading';
heading.classList.add('nueva-clase');
console.log(heading);

//Leccion 145
// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].href = "https://www.google.com";
enlaces[0].classList.add('nueva__clase')
// enlaces[0].classList.remove('navegacion__enlace')
// console.log(enlaces[0]);

//getElementById
const heading2 = document.getElementById('heading');


//Leccion 146
// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//agregar el href
nuevoEnlace.href='https://google.com';

//agregr atributo
nuevoEnlace.setAttribute('target','_blank')

//agregar texto
nuevoEnlace.textContent ='Tienda virtual';

//agregarlo a nodo padre (documento)
const navegacionEl = document.querySelector('.navegacion');
navegacionEl.appendChild(nuevoEnlace);

//leccion 147
//Eventos

// console.log(1);
// window.addEventListener('load',imprimir)//load espera a que el JS y los archivos que dependen de HTML esten listos)
// window.onload = function(){
//     console.log(4);
    
// }

// document.addEventListener('DOMContentLoaded', ()=>{//solo espera que se descargue el HTML, peron no espera que se cargue el CSS o las imagenes
//     console.log(7);
    
// })
// console.log(5);

// function imprimir(){
//     console.log(3);
// }

// window.onscroll = ()=>{
//     console.log('scrolling....');
    
// }

// 148
// seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector('.boton--primario');
// console.log(btnEnviar);

// btnEnviar.addEventListener('click',(e)=>{
//     e.preventDefault();

//     // validar un formulario
//     console.log('enviando formulario');
    
// })

// 149
// Evento de los inputs y textareas

//objeto global
const datos = {
    nombre: '',
    email:'',
    mensaje:''
}

const nombreEl = document.getElementById('nombre');
const emailEl = document.getElementById('email');
const mensajeEl = document.getElementById('mensaje');
const formularioEl = document.querySelector('.formulario');

nombreEl.addEventListener('input',leerTexto);
emailEl.addEventListener('input',leerTexto);
mensajeEl.addEventListener('input',leerTexto);

function leerTexto(e){
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value
    // console.log(datos);
}

//150
// Evento SUBMIT
formularioEl.addEventListener('submit',(e)=>{
    e.preventDefault();

    // validar un formulario
    const {nombre, email, mensaje} = datos; 
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios',false);
        return; // corta la ejecucion de un codigo
    }
    
    //enviar el formulario    
    mostrarAlerta('Formulario enviado correctamente',true);
    
})

function mostrarAlerta(mensaje,tipo){
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    clase = tipo ? "correcto":"error";
    alerta.classList.add(clase)
    formularioEl.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

// REFACTORIZACION
//muestra un error en pantalla
// function mostrarError(mensaje){
//     // alert(mensaje);
//     // const error = document.createElement('p');
//     // error.textContent = mensaje;
//     // error.classList.add('error');
//     // formularioEl.appendChild(error);

//     // Desaparecer el mensaje de error despues de 5 segundos
//     setTimeout(()=>{
//         error.remove();
        
//     },2000);


// }
// function mostrarMensaje(mensaje){
//     // const alerta = document.createElement('p');
//     // alerta.textContent = mensaje;
//     // alerta.classList.add('correcto');
//     // formularioEl.appendChild(alerta);

//     setTimeout(()=>{
//         alerta.remove();
//     },3000)
// }

