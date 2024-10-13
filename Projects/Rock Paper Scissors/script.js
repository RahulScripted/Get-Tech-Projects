const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImage = document.querySelectorAll(".option_image");

optionImage.forEach((image,index) => {
    image.addEventListener("click",(e) =>{
        image.classList.add("active");
        optionImage.forEach((image2,index2) => {
            index !== index2 && image2.classList.remove("active");
        });
        gameContainer.classList.add("start");
        let time = setTimeout(() =>{
            gameContainer.classList.remove("start");
            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;
            let randomNumber = Math.floor(Math.random() * 3);
            let cpuImages = ["Assests/fist.png","Assests/hand-paper.png","Assests/victory.png"];
            cpuResult.src = cpuImages[randomNumber];
            let cpuValue = ["R","P","S"][randomNumber];
            let UserValue = ["R","P","S"][index];
            let outcome = {
                RR : "Draw",
                RP : "CPU",
                RS : "User",
                PP : "Draw",
                PR : "User",
                PS : "CPU",
                SS : "Draw",
                SR : "CPU",
                SP : "User",
            };
            let outcomeValue = outcome[UserValue + cpuValue];

            result.textContent = UserValue === cpuValue ? "Match Draw" : `${outcomeValue} Won`;
        },1000); 
    });
});