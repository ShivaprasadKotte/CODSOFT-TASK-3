// script.js

function updateClock() {
    const currTime = new Date();
    const hrs = currTime.getHours();
    const mins = currTime.getMinutes();
    const secs = currTime.getSeconds();

    const timeString = `${formatTime(hrs)}:${formatTime(mins)}:${formatTime(secs)}`;

    document.getElementById('time').textContent = timeString;
}

function formatTime(timeUnit) {
    return timeUnit < 10 ? `0${timeUnit}` : timeUnit;
}


setInterval(updateClock, 1000);


updateClock();
