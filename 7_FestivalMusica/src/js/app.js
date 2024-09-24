
document.addEventListener('DOMContentLoaded',()=>{
    navegacionFija();
    crearGalerias();
    resaltarEnlace();
})

function navegacionFija(){
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');
    document.addEventListener('scroll', ()=>{
        if(sobreFestival.getBoundingClientRect().bottom < 1){
            header.classList.add('fixed');
        }else{
            header.classList.remove('fixed');            
        }
        
    })
}

function crearGalerias(){
    const CANTIDAD_IMAGENES = 16;
    const galeriaUl = document.querySelector('.galeria-imagenes');
    
    
    for(let i=1; i<=CANTIDAD_IMAGENES;i++){
        const img = document.createElement('IMG');
         img.src =`./src/img/gallery/full/${i}.jpg`;
         img.alt = "imagen galeria"
         galeriaUl.appendChild(img);

         img.onclick = function(){
             mostrarImagen(i);
        }
        
    }
}

function mostrarImagen(i){

    const img = document.createElement('IMG');
    img.src =`./src/img/gallery/full/${i}.jpg`;
    img.alt = "imagen galeria"
    
    //Generar modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal;
    
    // boton cerrar modal
    const cerrarModalBtn = document.createElement('BUTTON');
    cerrarModalBtn.textContent = 'X';
    cerrarModalBtn.classList.add('btn-cerrar');
    cerrarModalBtn.onclick = cerrarModal;

    
    //agregar al HTML
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    
    modal.appendChild(img);
    modal.appendChild(cerrarModalBtn);
    body.appendChild(modal);

    
}

function cerrarModal(){

    const modal = document.querySelector('.modal');
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal?.remove();
        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden');
    }, 500);
    
}

function resaltarEnlace(){
    document.addEventListener('scroll',()=>{
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navegacion-principal a');
        
        let actual = '';
        sections.forEach(section =>{
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if(window.scrollY >= (sectionTop - sectionHeight / 3 ) ){
                actual = section.id;
                
            }
        });

        navLinks.forEach(link =>{
            if(link.getAttribute('href') === '#'+ actual){
                link.classList.add('active');
            }else{
                link.classList.remove('active')
            }

        })

    })
}



