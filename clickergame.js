let button = document.querySelector("#myButton");
let clicks = 0;

function handleButtonClick(){
    clicks=clicks+1;
    document.getElementById("score").innerHTML = clicks;
        if (clicks>10){
            clicks +=1;
        }
        if (clicks>30){
            clicks +=2;
        }
        if (clicks>50){
            clicks +=3;
        }
    console.info(clicks);
}

button.addEventListener("click",handleButtonClick);