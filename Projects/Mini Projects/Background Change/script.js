let button = document.getElementById("btn");

let random = () => {
    return Math.floor(Math.random() * 256);
}
let changeBackground = () => {
    let bgColor = `rgb(${random()},${random()},${random()})`;
    document.body.style.background = bgColor;
}
button.addEventListener("click",changeBackground);
window.addEventListener("load",changeBackground);