// Création des variables
const menuHamburger = document.querySelector(".menu-hamburger") // Indiquer la class de l'image.
const navLinks = document.querySelector(".nav-links") // Indiquer la class des boutons de la nav.
// const titre = document.querySelector(".titre") //
const paragraphe = document.querySelector(".paragraphe")

// A chaque fois qu'on clique sur la variable menuHamburger, la class "mobile-menu" s'ajoute a la classe nav-links et inversement
menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
titre.classList.toggle('titre-menu')
paragraphe.classList.toggle('paragraphe-menu')

})

