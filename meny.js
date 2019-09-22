// Deklarerar variabler
const hamburgaren = document.querySelector('#hamburgaren');
const menyLinks = document.querySelector('#menyLinks');
const links = document.querySelectorAll('#menyLinks li');

// Funktioner
function menyToggle() {
    menyLinks.classList.toggle("open"); // Byt mellan #menyLinks och #menyLinks.open 
}

// Deklarera eventlisteners för Desktop mus
hamburgaren.addEventListener('click', menyToggle);

