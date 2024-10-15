function calculate(){

    // Weight Display
    let weight = document.getElementById("weight").value;

    document.getElementById("weight-val").textContent = weight + " kg";

    // Height Display
    let height = document.getElementById("height").value;

    document.getElementById("height-val").textContent = height + " cm";

    // BMI Calculation
    let bmi = (weight / (Math.pow((height / 100),2))).toFixed(1);

    document.getElementById("result").textContent = bmi;

    // Weight Calculation
    if(bmi < 18.5){
        category = "Under Weighted";
        result.style.color = "#ec9d2e";
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        category = "Normal Weighted";
        result.style.color = "#06b209";
    }
    else if(bmi >= 25 && bmi <= 29.9){
        category = "Over Weighted";
        result.style.color = "#ec5127";
    }
    else{
        category = "Obese";
        result.style.color = "#ed1414";
    }
    document.getElementById("category").textContent = category;
}