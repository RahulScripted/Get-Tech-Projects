// Add shadow on header
let header = document.querySelector('.header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY > 0);
});

// Hamburger Menu
let menu = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navBar');

menu.onclick = () => {
    menu.classList.toggle('add');
    navBar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('add'); 
    navBar.classList.remove('active');
}


// Scroll Up Button
let scrollUp = document.querySelector('.scroll-to-top');
window.addEventListener('scroll',()=>{
    scrollUp.classList.toggle('up',window.scrollY > 100);
});
function ScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
}

// GSAP animation for header part
let tl = gsap.timeline();
tl.from(".logo, .navBar li",{
    y: -30,
    duration:1,
    delay:1,
    opacity: 0,
    stagger: 0.15
});

// Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '120px',
    duration: 2200,
    delay: 200,
    reset: true,
})

// Home 
sr.reveal('.home .text-content',{origin:'left'})
sr.reveal('.home .text-content h2',{origin:'left',delay: 100})
sr.reveal('.home .text-content h4',{origin:'left',delay: 200})
sr.reveal('.home .img-content img',{origin:'right', delay : 200})

// About Us
sr.reveal('.aboutus .text-content',{origin:'right'})
sr.reveal('.aboutus .text-content h5',{origin:'right'})
sr.reveal('.aboutus .text-content h2',{origin:'right',delay : 100})
sr.reveal('.aboutus .text-content p',{origin:'right',delay : 200})
sr.reveal('.aboutus .img-content img',{origin:'left', delay : 200})

// Service
sr.reveal('.service h5',{origin:'bottom'})
sr.reveal('.service h2',{origin:'bottom',delay: 100})
sr.reveal('.service .row .col',{origin:'left',interval: 400,delay : 100})

// Menu
sr.reveal('.menu h5',{origin:'bottom'})
sr.reveal('.menu h2',{origin:'bottom',delay: 100})
sr.reveal('.menu .row .col',{origin:'left',interval: 400,delay : 100})

// App
sr.reveal('.app .img-content img',{origin:'left'})
sr.reveal('.app .text-content h5',{origin:'right'})
sr.reveal('.app .text-content p',{origin:'right',delay : 100})
sr.reveal('.app .text-content .download-img img',{origin:'right',delay : 200,interval : 400})


// Contact Us
sr.reveal('.contactus .left-part h2',{origin:'left'})
sr.reveal('.contactus .left-part p',{origin:'left',delay : 100})
sr.reveal('.contactus .right-part .btn',{origin:'right',delay : 100})