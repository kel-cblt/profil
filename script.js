// ===============================
// TYPING HERO TEXT
// ===============================

const welcomeText = "Selamat Datang";
const subtitleText = "Website Resmi Kelurahan Ciumbuleuit";

let i = 0;
let j = 0;

function typeWelcome() {

if (i < welcomeText.length) {

document.getElementById("welcome").textContent += welcomeText.charAt(i);
i++;

setTimeout(typeWelcome, 120);

} else {

setTimeout(typeSubtitle, 300);

}

}

function typeSubtitle() {

if (j < subtitleText.length) {

document.getElementById("typing").textContent += subtitleText.charAt(j);
j++;

setTimeout(typeSubtitle, 70);

}

}

document.addEventListener("DOMContentLoaded", typeWelcome);

// SCROLL ANIMATION CARD

const cards = document.querySelectorAll(".card");

function showCards(){

cards.forEach(card => {

const position = card.getBoundingClientRect().top;
const screenHeight = window.innerHeight;

if(position < screenHeight - 100){
card.classList.add("show");
}

});

}

window.addEventListener("scroll", showCards);
window.addEventListener("load", showCards);