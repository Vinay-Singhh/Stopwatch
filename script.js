// selectors
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var min = 0;
var sec = 0;
var millisec = 0;

var watch = false;

// this function will start stopwatch
start.addEventListener('click', function () {
    watch = true;
    stopwatch();
});

// this function will pause stopwatch
stop.addEventListener('click', function () {
    watch = false;
});

// this function will reset stopwatch
reset.addEventListener('click', function () {
    watch = false;
    min = 0;
    sec = 0;
    millisec = 0;
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("milliseconds").innerHTML = "00";
});

// this is the main function
function stopwatch() {

    if (watch == true) {
        millisec++;
        if (millisec == 100) {
            sec++;
            millisec = 0;
        }
        if (sec == 60) {
            min++;
            sec = 0;
        }

        // to add 0 as a string for double digits issue
        var minString = min;
        var secString = sec;
        var milliString = millisec;

        if (min < 10) {
            minString = "0" + minString;
        }
        if (sec < 10) {
            secString = "0" + secString;
        }
        if (millisec < 10) {
            milliString = "0" + milliString;
        }

        document.getElementById("minutes").innerHTML = minString;
        document.getElementById("seconds").innerHTML = secString;
        document.getElementById("milliseconds").innerHTML = milliString;
        setTimeout(() => {
            stopwatch();
        }, 10);
    }
}