var counter = 65

var countdown = function (){
 console.log(counter);
 counter--;

    if(counter === 60){
        document.write("60 seconds until launch!");
    }

    if(counter === 50){
        document.write("<br>");
        document.write("50 seconds until launch!");
    }
    
    if(counter === 40){
        document.write("<br>");
        document.write("40 seconds until launch!");
    }

    if(counter === 30){
        document.write("<br>");
        document.write("30 seconds until launch!");
    }

    if(counter === 20){
        document.write("<br>");
        document.write("20 seconds until launch!");
    }

    if(counter === 10){
        document.write("<br>");
        document.write("10 seconds until launch!");
    }

    if(counter === 3){
        document.write("<br>");
        document.write("3 seconds until launch!");
    }

    if(counter === 0){
        document.write("<br>");
        document.write("<br>");
        document.write("BLAST OFF!");
    }

    if(counter === -5){
        document.write("<br>");
        document.write("<br>");
        document.write("Refresh the page to restart the counter!");

        clearInterval(startCountdown);
    }
}

var startCountdown = setInterval(countdown, 1000);
