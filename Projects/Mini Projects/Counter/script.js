document.getElementById("incrementBtn").addEventListener("click",incrementCounter);
document.getElementById("decrementBtn").addEventListener("click",decrementCounter);
document.getElementById("resetBtn").addEventListener("click",resetCounter);

let displayCounter = document.getElementById("counter-display");
let counterValue = 0;

function updateCounter(){
    displayCounter.textContent = counterValue;
}
function incrementCounter(){
    counterValue++;
    updateCounter();
}
function decrementCounter(){
    counterValue--;
    updateCounter();
}
function resetCounter(){
    counterValue = 0;
    updateCounter();
}
