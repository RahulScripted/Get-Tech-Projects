let kilogram = document.getElementById("kg");
let lb = document.getElementById("pound");
let oz = document.getElementById("ounce");

let fromKg = () =>{
    let kg = kilogram.value;
    if(kg === ""){
        lb.value = "";
    }
    else{
        lb.value = (kg * 2.205).toFixed(2);
    }
    if(kg === ""){
        oz.value = "";
    }
    else{
        oz.value = (kg * 35.274).toFixed(2);
    }
}
// If User give input in  pound
let fromPound = () =>{
    let pounds = lb.value;
    if(pounds === ""){
        kilogram.value = "";
    }
    else{
        kilogram.value = (pounds / 2.205).toFixed(2);
    }
    if(pounds === ""){
        ounce.value = "";
    }
    else{
        ounce.value = (pounds * 16).toFixed(2);
    }
}
// If User give input in  pound
let fromOunce = () =>{
    let ounces = oz.value;
    if(ounces === ""){
        kilogram.value = "";
    }
    else{
        kilogram.value = (ounces / 2.205).toFixed(2);
    }
    if(ounces === ""){
        pound.value = "";
    }
    else{
        pound.value = (ounces / 16).toFixed(2);
    }
}
kilogram.addEventListener("input",fromKg);
pound.addEventListener("input",fromPound);
ounce.addEventListener("input",fromOunce);
window.addEventListener("load",fromKg);