const display = document.getElementById('display');

// Adds the button value to the screen
function appendToDisplay(input) {
    display.value += input;
}

// Clears everything from the screen
function clearDisplay() {
    display.value = "";
}

// Deletes only the last character
function deleteLast() {
    display.value = display.value.toString().slice(0, -1);
}

// The math logic
function calculate() {
    try {
        // eval() calculates the string (e.g., "5+5" becomes 10)
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}