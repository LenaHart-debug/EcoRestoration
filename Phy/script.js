// Header scroll effect
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
if (window.scrollY > 50) {
header.classList.add("scrolled");
} else {
header.classList.remove("scrolled");
}
});

// Fade-in animation on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("show");
}
});
});

faders.forEach(el => appearOnScroll.observe(el));

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
counter.innerText = '0';

const updateCounter = () => {
const target = +counter.getAttribute('data-target');
const c = +counter.innerText;

const increment = target / 100;

if(c < target){
counter.innerText = `${Math.ceil(c + increment)}`;
setTimeout(updateCounter, 30);
}else{
counter.innerText = target;
}
};

updateCounter();
});