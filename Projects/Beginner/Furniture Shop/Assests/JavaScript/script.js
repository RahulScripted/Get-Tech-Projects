// To show active pages
let navBar = document.querySelectorAll(".navBar li");

navBar.forEach(item => {
    item.addEventListener("click", () => {
        navBar.forEach(el => el.classList.remove("active"));
        item.classList.add("active");
    });
});