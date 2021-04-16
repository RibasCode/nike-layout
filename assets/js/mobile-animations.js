'use strict'

// Camviar la altura del background de la sabata
let x = window.matchMedia("(max-width: 1024px)");

const llista = document.getElementsByTagName('li')
const aosMobil = document.querySelector('.aos-css')



function changeAnimations(){

    if (x.matches) { // If media query matches

        aosMobil.href = 'null';

    } else {

    }

}
// Executem la funció Change heit de adalt
changeAnimations();