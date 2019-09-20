// Deklarerar variabler
const canvas = document.querySelector('canvas');
const gfx = canvas.getContext("2d");
const hamburgaren = document.querySelector('#hamburgaren');
const menyLinks = document.querySelector('#menyLinks');
const links = document.querySelectorAll('#menyLinks li');
let colors = document.getElementsByClassName('color');
let painting = false;

// Ändrar storleken på canvas elementet till fönsterstorleken.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 50; // Räknar bort Toolbar diven.

// Loopa igenom colors array och lägg till en klick event på elementet.
for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', valjFarg);
}

function valjFarg(e) {
    let color = e.target; // Vilken färg klickades på?
    gfx.strokeStyle = color.style.backgroundColor; // Sätt penfärg till backgrundsfärgen på knappen.
}

function startPosition(e) {
    painting = true;
    paint(e); 
}

function slutPosition() {
    painting = false;    
    gfx.beginPath(); // Skapa en ny path när man släpper musknappen.
}

function paint(e) {
    if(!painting) return; // Hoppa ur funktionen om musknappen inte trycks ner.
    
    /*  PreventDefault löste problemet med att rita utanför kanterna.
        Man markerade text istället för att kunna klicka på knapparna.
        Källa: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault */
    e.preventDefault();

    gfx.lineWidth = 10; // Bredden på "pennan".
    gfx.lineCap = "round"; // Rundare kanter på linjerna.
    gfx.lineTo(e.clientX, e.clientY); // Drar en linje mellan mus x och mus y positionen.
    gfx.stroke(); // Ritar där muspelaren befinner sig.
    gfx.beginPath(); // Skapa en ny path när man släpper musknappen.
    gfx.moveTo(e.clientX, e.clientY); // Flyttat linjen till mus positionen.
}

function menyToggle() {
    menyLinks.classList.toggle("open"); // Byt mellan #menyLinks och #menyLinks.open 
}

// Deklarera eventlisteners för Desktop mus
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', slutPosition);
canvas.addEventListener('mousemove', paint);
hamburgaren.addEventListener('click', menyToggle);
