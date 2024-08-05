document.addEventListener('keydown', function(event) {
    const display = document.getElementById('keypress-display');
    console.log(display.innerHTML);
    display.textContent = `You pressed: ${event.key} with code ${event.keyCode} and Code: ${event.code}`;
    display.classList.add('active');

    // Remove the 'active' class after 2000 milliseconds (2 seconds)
    setTimeout(() => {
        display.classList.remove('active');
    }, 2000);
});