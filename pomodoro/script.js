let timer;
let minutos;
let segundos;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        timer = setInterval(updateTimer, 1000);
        isRunning = true;
        document.getElementById('startButton').textContent = 'Pause';
    } else {
        clearInterval(timer);
        isRunning = false;
        document.getElementById('startButton').textContent = 'Resume';
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('startButton').textContent = 'Start';
    minutos = 45;
    segundos = 0;
    updateDisplay();
}

function updateTimer() {
    if(minutos === 0 && segundos === 0) {
        clearInterval(timer);
        isRunning = false;
        document.getElementById('startButton').textContent = 'Start'
        playAlarme();
    } else if (segundos === 0){
        minutos--;
        segundos = 59;
    } else {
        segundos--;
    }
    updateDisplay();
}

function updateDisplay() {
    const formattedMinutos = minutos < 10 ? '0' + minutos : minutos;
    const formattedSegundos = segundos < 10 ? '0' + segundos : segundos;
    document.getElementById('timer').textContent = `${formattedMinutos}:${formattedSegundos}`;
}

    function playAlarme() {
        const alarmSound = document.getElementById('alarmSound');
        alarmSound.currentTime = 0;
        alarmSound.play();
}

