// Hamburger menu
const menuBtn = document.getElementById("menu-icon");
const navLinks = document.getElementById("navBar");
const menuBtnIcon = document.querySelector("#menu-icon i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-5-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("active");
    menuBtnIcon.setAttribute("class", "ri-menu-5-line");
});


// Add shadow
let header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    let triggerHeight = window.innerHeight * 0.1;
    header.classList.toggle('shadow', window.scrollY > triggerHeight);
});


// Scroll revel
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 1500,
    delay: 200,
    interval: 200,
    reset: true,
});

// Home
sr.reveal('.home .left',{origin:'left',delay:'200'})
sr.reveal('.home .right h1',{origin:'right',delay:'100'})
sr.reveal('.home .right p',{origin:'right',delay:'400'})
sr.reveal('.home .right .buttons .btn',{origin:'bottom'})
sr.reveal('.home .right .buttons .video-sec',{origin:'bottom'})
sr.reveal('.home .right .buttons .watch',{origin:'bottom'})
sr.reveal('.home h5',{origin:'top',delay:'200'})

// Destination
sr.reveal('.text h2',{origin:'left',delay : '200'})
sr.reveal('.text p',{origin:'left',delay : '400'})
sr.reveal('.ri-arrow-left-line',{origin:'right',delay : '200'})
sr.reveal('.ri-arrow-right-line',{origin:'right',delay : '400'})
sr.reveal('.destination-bottom .img-sec',{origin:'bottom',delay : '400',interval: '200'})

// Pricing
sr.reveal('.pricing-top h2',{origin:'top',delay : '200'})
sr.reveal('.pricing-top p',{origin:'top',delay : '400'})
sr.reveal('.pricing-sec-container .pricing-sec',{origin:'bottom',delay : '400',interval: '200'})
sr.reveal('.button-sec',{origin:'bottom',delay : '200'})

// Review
sr.reveal('.left-container img',{origin:'left',delay : '400',interval: '200'})
sr.reveal('.right-container h2',{origin:'right',delay : '200'})
sr.reveal('.right-container p',{origin:'right',delay : '400'})
sr.reveal('.right-container .btn',{origin:'right',delay : '600'})

// Contact
sr.reveal('.contact .left-side h2',{origin:'left',delay : '200'})
sr.reveal('.contact .left-side p',{origin:'left',delay : '400'})
sr.reveal('.right-side',{origin:'right',delay : '300'})

// Footer
sr.reveal('.footer .row .col',{origin:'left',delay : '400',interval: '400'})
sr.reveal('.footer .copyright',{origin:'bottom',delay : '200'})