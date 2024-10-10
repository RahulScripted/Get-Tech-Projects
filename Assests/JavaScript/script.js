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
  

// Swiper JavaScript
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30, 
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    }
});