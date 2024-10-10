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