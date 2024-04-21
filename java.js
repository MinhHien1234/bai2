let timer;
let alarmSound = document.getElementById('alarmSound');

function startTimer() {
    let minutes = parseInt(document.getElementById('minutesInput').value);
    let seconds = parseInt(document.getElementById('secondsInput').value);

    if (isNaN(minutes)) minutes = 0;
    if (isNaN(seconds)) seconds = 0;

    let totalTime = minutes * 60 + seconds;

    if (totalTime > 0) {
        timer = setInterval(() => {
            totalTime--;
            if (totalTime <= 0) {
                clearInterval(timer);
                playAlarm();
            }
            updateDisplay(totalTime);
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timer);
    document.getElementById('minutesInput').value = '';
    document.getElementById('secondsInput').value = '';
}

function updateDisplay(totalTime) {
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    document.title = `${minutes}m ${seconds}s - Alarm Clock`;
}

function playAlarm() {
    alarmSound.play();
    alert('Time\'s up!');
}
