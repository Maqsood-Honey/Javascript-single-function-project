let currentTime = document.querySelector('h1');
let selectMenu = document.querySelectorAll('select');
let button = document.querySelector('.btn');
let content = document.querySelector('.content');

let alarmTime, isAlarm=false;

let audio = new Audio("./ringtone.mp3");
for (let i = 12; i > 0; i--){
i = i < 10 ? "0" + i : i;
let option = `<option value="${i}">${i}</option>`;
selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i > 0; i--){
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
    }

    for (let i = 2; i > 0; i--){
        let ampm  = i == 1 ? "AM" : "PM";
        let option = `<option value="${ampm}">${ampm}</option>`;
        // console.log(option);
        selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
        // console.log(`${selectMenu[2].value}`);    
    }
        
        setInterval(() => {
            let date = new Date();
            h = date.getHours();
            m = date.getMinutes();
            s = date.getSeconds();
            ampm = "AM"
            
            if(h >= 12){
                h = h-12;
                ampm = "PM";
               }
               h = h == 0 ? h=12 : h;
               
               h = h < 10 ? "0" + h : h; 
               m = m < 10 ? "0" + m : m; 
               s = s < 10 ? "0" + s : s;
               currentTime.innerText = (`${h}:${m}:${s} ${ampm}`); 
               if (alarmTime == `${h}:${m} ${ampm}`){
                console.log("alarm is running");
                audio.play();
                audio.loop = true;
               }

        }, 1000);


       function setAlarm(){
        if(isAlarm){
            alarmTime = "";
            audio.pause();
            content.classList.remove("disable");
            button.innerText = "Set Alarm";
            return isAlarm="false";
        }
        console.log(`${selectMenu[2].value}`); 
            let timer = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
            console.log(timer);

            if(timer.includes("Minute") ||timer.includes("Hour") || timer.includes("AM\PM")){
                alert("Please enter valid time");
            }
            isAlarm= true;
            alarmTime = timer;
            content.classList.add('disable');
            button.innerText ="Clear Alarm";

        }

        button.addEventListener("click",setAlarm)