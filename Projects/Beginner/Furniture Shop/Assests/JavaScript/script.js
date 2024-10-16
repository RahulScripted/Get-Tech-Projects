// To show active pages
let navBar = document.querySelectorAll(".navBar li");

navBar.forEach(item => {
    item.addEventListener("click", () => {
        navBar.forEach(el => el.classList.remove("active"));
        item.classList.add("active");
    });
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