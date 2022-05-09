var counter = 15

var countdown = function (){
 console.log(counter);
 counter--;
    if(counter === 0){
        console.log("blastoff!");
    }
}

var startCountdown = setInterval(countdown, 1000);
