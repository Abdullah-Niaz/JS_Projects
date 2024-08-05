const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

let intervalId;

startBtn.addEventListener("click", function () {
    intervalId = setInterval(function () {
        console.log("hello");
        document.body.style.background = getRandomColor();
    }, 2000);
});

stopBtn.addEventListener("click", function () {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null; // Reset the intervalId to allow restarting later
    }
});