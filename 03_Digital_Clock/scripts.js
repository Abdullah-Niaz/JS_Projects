const clock = document.getElementById("clock");

setInterval(() => {
    const date = new Date();
    clock.innerHTML = date;
    // clock.innerHTML = date.toLocaleTimeString();
}, 1000);