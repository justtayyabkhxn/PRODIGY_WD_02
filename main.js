var timer = document.querySelector('.timer');
var togglebtn = document.querySelector('.toggle')
var resetbtn = document.querySelector('.reset')
var lapbtn = document.querySelector('.lap')
var lapbox = document.querySelector('.lapbox');

var watch = new stopwatch(timer);


function start() {
    togglebtn.textContent = 'Stop';
    togglebtn.classList.toggle("on");
    watch.start();
}
function stop() {
    togglebtn.textContent = 'Start';
    togglebtn.classList.toggle("on");
    watch.stop();
}

function stopWhenon() {
    togglebtn.textContent = 'Start';
    togglebtn.classList.toggle("on");
    watch.stop();
    watch.reset();
}

togglebtn.addEventListener('click', function () {
    if (!watch.isOn) {
        start();
    } else {
        stop();
    }
});

lapbtn.addEventListener('click', function () {
    if (watch.isOn) {
        watch.lapon();
    } else {
        watch.lapOff();
    }
});

function resetWatch() {
    stopWhenon();
    
}

resetbtn.addEventListener('click', resetWatch);


