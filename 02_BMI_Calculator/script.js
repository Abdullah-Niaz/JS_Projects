const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#Height").value);
    const weight = parseInt(document.querySelector("#Weight").value);
    const result = document.querySelector("#result");

    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Please provide a valid height.";
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please provide a valid weight.";
    } else {
        result.innerHTML = (weight / ( ( height * weight) / 10000)).toFixed(2);
        // You can proceed with further processing here
    }
});
