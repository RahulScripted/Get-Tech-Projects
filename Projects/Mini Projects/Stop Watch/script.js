let [milliSecond,second,minute,hour] = [0,0,0,0];
let timeRef = document.querySelector('.timerDisplay');
let int;

// Start
document.getElementById('startTimer').addEventListener('click', ()=>{
    int = setInterval(displayTimer,10);
});

function displayTimer(){
    milliSecond += 10;
    if(milliSecond == 1000){
        milliSecond = 0;
        second++;
        if(second == 60){
            second = 0;
            minute++;
            if(minute == 60){
                minute = 0;
                hour++;
            }
        }
    }
    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    let ms = milliSecond < 10 ? "00" + milliSecond : milliSecond < 100 ? "0" + milliSecond : milliSecond;

    timeRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

// Pause Time
document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});

// Reset Time
document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [milliSecond,second,minute,hour] = [0,0,0,0];
    timeRef.innerHTML = '00 : 00 : 00 : 000';
});