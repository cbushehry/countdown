var counter = 70

var countdown = function (){
 console.log(counter);
 counter--;
     if(counter === 60){
        console.log("1 Minute until launch!")
    };

    if(counter === 10){
        console.log("10 seconds until launch!")
    };

    if(counter === -1){
        console.log("BLAST OFF!")
    }

    if(counter === -3){
        console.log("Refresh the page to restart the counter!");
        clearInterval(startCountdown);
    };
};

var startCountdown = setInterval(countdown, 200);
