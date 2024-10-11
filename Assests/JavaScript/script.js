// Add shadow on nav bar
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("header");
    if (window.scrollY > 50) navbar.classList.add("shadow");
    else navbar.classList.remove("shadow");
});

// Smooth Scrolling
document.querySelectorAll('.navBar li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
      
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
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

// Scroll Up Button Design
let scrollUp = document.querySelector('.scrollUp');
window.addEventListener('scroll',()=>{
    scrollUp.classList.toggle('up',window.scrollY > 150);
});
function ScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Swiper JavaScript
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        500: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

// Scroll revel animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '120px',
    duration: 1800,
    delay: 200,
    reset: true,
})

// SVG
sr.reveal('.heading.left-part svg',{origin:'left',delay:'300'});

// Home 
sr.reveal('.home .left-part .h5-sec',{origin:'left',delay:'100'});
sr.reveal('.home .left-part .heading',{origin:'left',delay:'200'});
sr.reveal('.home .left-part .paragraph',{origin:'left',delay:'300'});
sr.reveal('.home .left-part',{origin:'left',delay:'400'});
sr.reveal('.home .right-part img',{origin:'right',delay:'200'});

// Made With
sr.reveal('.content .h5-sec',{origin:'top',delay:'200'});
sr.reveal('.lower-part .box',{origin:'left',delay:'200',interval:'400'});

// About 
sr.reveal('.about .left-part .h5-sec',{origin:'left',delay:'100'});
sr.reveal('.about .left-part .heading',{origin:'left',delay:'200'});
sr.reveal('.about .left-part .paragraph',{origin:'left',delay:'300'});
sr.reveal('.about .left-part',{origin:'left',delay:'400'});
sr.reveal('.about .right-part img',{origin:'right',delay:'200'});

// Project
sr.reveal('.Projects .h5-sec',{origin:'top'});
sr.reveal('.Projects .card',{origin:'left',delay:'200',interval:'400'});

// Contribution 
sr.reveal('.contribution .left-part .h5-sec',{origin:'left',delay:'100'});
sr.reveal('.contribution .left-part .heading',{origin:'left',delay:'200'});
sr.reveal('.contribution .left-part .paragraph',{origin:'left',delay:'300'});
sr.reveal('.contribution .left-part',{origin:'left',delay:'400'});
sr.reveal('.contribution .right-part img',{origin:'right',delay:'200'});

// Footer
sr.reveal('.footer .logo',{origin:'left',delay:'200'});
sr.reveal('.footer .row',{origin:'left',delay:'200',interval:'400'});
sr.reveal('.footer .footer-bottom',{origin:'right',delay:'200',interval:'400'});