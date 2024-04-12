function stopwatch(element) {
    var time = 0;
    var offset;
    var interval;

    function lapon() {
        var laptime = lapbox.appendChild(document.createElement("li"));
        laptime.innerHTML = timeFormatter(time);
        laptime.classList = 'lapItem';
    }

    function lapOff() {
        return;
    }
    function update() {
        if (this.isOn) {
            var elapsedTime = getTimer();
            time += elapsedTime;
        }
        element.textContent = timeFormatter(time);
    }
    
    function getTimer() {
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;

        return timePassed;
    }
    function timeFormatter(time) {
        var minutes = Math.floor(time / 60000);
        var seconds = Math.floor((time % 60000) / 1000);
        var milliseconds = Math.floor((time % 1000));
    
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (milliseconds < 100) {
            if (milliseconds < 10) {
                milliseconds = '00' + milliseconds;
            } else {
                milliseconds = '0' + milliseconds;
            }
        }
        return minutes + ' : ' + seconds + ' : ' + milliseconds;
    }
    
    this.start =function(){
        interval=setInterval(update.bind(this),10);
        offset=Date.now();
        this.isOn=true;
    };
    this.stop =function(){
        clearInterval(interval);
        interval=null;
        this.isOn=false;
    };
    this.reset = function () {
        time = 0;
        lapbox.innerHTML = '';
        clearInterval(interval);
        interval = null;
        this.isOn = false;
        update(); // Call update after resetting time
    };
    this.lapon=function(){
        lapon();
    }
    this.lapOff=function(){
        lapOff();
    }

}