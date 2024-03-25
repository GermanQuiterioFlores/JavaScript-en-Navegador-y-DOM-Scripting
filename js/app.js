//formas de seleccionar contenido (y manipularlo desde js), hay 3 mas principales:

//1. querySelector: te regresara  ninguno o hasta un elemento que concuerde 
//con el selector que estas escribiendo
const heading = document.querySelector('.header__texto h2'); // retorna 0 o 1 elementos //todos los selectores de querySelector van con document
// el h2 que este dentro de la clase del div llamada: header_texto
//Pued buscar por ID, usando igual el #, tipo:
const buscandoID = document.querySelector('#heading');

heading.textContent = 'Nuevo Heading';
heading.classList.add('nueva-clase');
console.log(heading);
console.log(buscandoID);


//2. querySelectorAll: no solo retorna 1, sino todos los que concuerden con el selector

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);
//si quiero modificar 1 de todos los enlaces, lo selecciono como un arreglo
console.log(enlaces[0]);
//en FIREFOX develop, es un poco mejor porque te muestra todas las propiedades que puedes modificar
enlaces[0].href = 'https://google.com;'//cambiarle a donde te lleva

//puedes agregar clases
enlaces[0].classList.add('Hola');
//puedes eliminar clases
enlaces[1].classList.remove('navegacion__enlace');

// 3. Con getElementById
//Se busca por ID, literalmente es eso, solo que como ya sabe que busca por ID, no es
// necesario poner el # para buscar, ya nomas el ID se pone
/*const heading2 = document.getElementById('heading')//esta buscando para ir, podrias b
console.log(heading2);*/


//------------------Crear un nuevo enlace con codigo de JS----------------------------
const nuevoEnlace  = document.createElement('A');

//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
//Agregar el texto
nuevoEnlace.textContent = 'Un nuevo enlace jeje';
//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al documento (lo agregare a la navegacion de la barra)
const navegacion = document.querySelector('.navegacion');
//el  appendChild nos permite agregar un elemento
navegacion.appendChild(nuevoEnlace); //ya se ve en el html

//Asi es como se pone en html--> <a href="nosotros.html" class="nuevo-enlace">Nosotros</a>
console.log(nuevoEnlace);


//-----------------------EVENTOS---------------------------------------------
console.log(1);

//registrar los eventos con addEventListener
window.addEventListener('load', function() { //load espera a que el JS y archivos que dependan del HTML estén listos.
    console.log(2);
})
//window es un nivel mas alto que el puro document como lo veniamos trabajando, window abarca mucho más

//Otra forma de hacerlo:
function imprimir() {
    console.log("Desde fuera");
}
window.addEventListener('load', imprimir);//No es necesario ponerle el () a la funcion.

window.onload = function() { //Es como el de arriba, pero escrito de diferente forma
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log(4);
})


/**********************
¿Cuál es la diferencia entre load y DOMContentLoaded?
load espera a que se descargue todo el HTML, las imagenes, el css, el JS, todo.
En DOMContentLoaded solo espera a que se descargue el HTML.

Es por eso que aparece primero el DOMContentLoaded al momento de imprimirlo, se suele usar más este.
***********************/
console.log(5);

//Otro evento como el de Scroll
window.onscroll = function() {
    console.log("Estas dando scroll");
}


// Seleccionar elementos (nuestros) y asociarles un evento
const btnEnviar = document.querySelector('.boton--primario'); //Seleccionando un boton de mi html
btnEnviar.addEventListener('click', function(evento) {//le puedo pasar el "evento", pues asi me dará 
    //informacion del evento, ya solo lo imprimo en consola
    
    console.log(evento);
    console.log(evento.target);
    evento.preventDefault();//sirve para validar un formulario, validando que campos esten llenos
    //y no recarga la pagina como en automatico por el submit que es el boton enviar.
    console.log("Enviando formulario");
});

