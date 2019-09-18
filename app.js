// Deklarerar variabler
const canvas = document.querySelector('canvas');
const gfx = canvas.getContext("2d");
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
    // Vilken färg klickades på?
    let color = e.target;
    // Sätt penfärg till backgrundsfärgen på knappen.
    gfx.strokeStyle = color.style.backgroundColor; 
}

function startPosition(e) {
    painting = true;
    paint(e); 
}

function slutPosition() {
    painting = false;
    // Skapa en ny path när man släpper musknappen.
    gfx.beginPath(); 
}

function paint(e) {
    if(!painting) return; // Hoppa ur funktionen om musknappen inte trycks ner.
    gfx.lineWidth = 10; // Bredden på "pennan".
    gfx.lineCap = "round"; // Rundare kanter på linjerna.
    gfx.lineTo(e.clientX, e.clientY); // Drar en linje mellan mus x och mus y positionen.
    gfx.stroke(); // Ritar där muspelaren befinner sig.
    gfx.beginPath(); // Skapa en ny path när man släpper musknappen.
    gfx.moveTo(e.clientX, e.clientY); // Flyttat linjen till mus positionen.
}

// Deklarera eventlisteners för Desktop mus
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', slutPosition);
canvas.addEventListener('mousemove', paint);

// Deklarera eventlisteners för Mobile touch
canvas.addEventListener('touchstart', startPosition);
canvas.addEventListener('touchend', slutPosition);
canvas.addEventListener('touchmove', paint);



