// Shadow On Scroll
let header = document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY > 0);
});

// Hamburger Menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Scroll Reveal Animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
})
sr.reveal('.home-text',{origin:'left'})
sr.reveal('.home-img',{origin:'right'})
sr.reveal('.heading',{delay:200})
sr.reveal('.specs-details .box',{origin:'left',interval: 200})
sr.reveal('.specs-img',{delay:600})
sr.reveal('.shop-container .box',{interval: 150})
sr.reveal('.footer .logo',{interval: 150})
sr.reveal('.footer .footer-box',{interval: 150})