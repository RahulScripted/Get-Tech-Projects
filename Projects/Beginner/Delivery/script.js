// Shadow On Scroll
let header = document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY > 0);
});

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

// Hamburger Menu
let menu = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navBar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navBar.classList.remove('active');
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 200,
    reset: true,
})
sr.reveal('.left-section',{origin:'left'})
sr.reveal('.right-section',{origin:'right'})
sr.reveal('.first img',{origin:'right'})
sr.reveal('.scroll-to-top',{origin:'right'})
sr.reveal('.first h5',{origin:'left'})
sr.reveal('.first p',{origin:'left'})
sr.reveal('.img-sec',{origin:'bottom'})
sr.reveal('.context-sec',{origin:'top'})
sr.reveal('.box',{origin:'left',interval: 200})
sr.reveal('.left-part',{origin:'top'})
sr.reveal('.right-part',{origin:'bottom'})
sr.reveal('.btn-sec',{origin:'right'})
sr.reveal('.form-sec',{delay:600})
sr.reveal('footer',{delay:600,origin: 'left'})