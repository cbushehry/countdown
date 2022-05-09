var counter = 10

var countdown = function (){
 console.log(counter);
 counter--;
    if(counter === 5){
        console.log("5 seconds until launch!")
    };

    if(counter === -1){
        console.log("blast off!");
        clearInterval(startCountdown);
    };
};

var startCountdown = setInterval(countdown, 1000);
